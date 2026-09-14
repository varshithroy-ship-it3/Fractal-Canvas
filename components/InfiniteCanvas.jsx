'use client';

import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import { Viewport } from 'pixi-viewport';

const WORLD_SIZE = 6000;
const DOT_COUNT = 1000;

function createGlowTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  );
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.25, 'rgba(180,220,255,0.7)');
  gradient.addColorStop(1, 'rgba(180,220,255,0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  return PIXI.Texture.from(canvas);
}

export default function InfiniteCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    let app = null;
    let cancelled = false;

    const initPixi = async () => {
      const instance = new PIXI.Application();

      await instance.init({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x0a0a0a,
        antialias: true,
        autoDensity: true,
        resolution: window.devicePixelRatio || 1,
        events: { move: true },
      });

      if (cancelled) {
        instance.destroy(true, { children: true });
        return;
      }

      app = instance;
      containerRef.current.appendChild(app.canvas);

      const viewport = new Viewport({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        worldWidth: WORLD_SIZE,
        worldHeight: WORLD_SIZE,
        events: app.renderer.events,
      });

      app.stage.addChild(viewport);

      viewport
        .drag()
        .pinch()
        .wheel()
        .decelerate()
        .clampZoom({ minScale: 0.1, maxScale: 6 });

      // Glowing dots
            // Glowing dots
      const glowTexture = createGlowTexture();
      const dotsLayer = new PIXI.Container();

      const colors = [0x4dff4d, 0x4d9fff, 0xffff4d, 0xffffff, 0xff66cc, 0xff9933];

      for (let i = 0; i < DOT_COUNT; i++) {
        const dot = new PIXI.Sprite(glowTexture);
        dot.anchor.set(0.5);
        dot.blendMode = 'add';
        dot.tint = colors[Math.floor(Math.random() * colors.length)];
        dot.position.set(
          Math.random() * WORLD_SIZE,
          Math.random() * WORLD_SIZE
        );
        const scale = 0.3 + Math.random() * 0.9;
        dot.scale.set(scale);
        dot.alpha = 0.5 + Math.random() * 0.5;
        dotsLayer.addChild(dot);
      }

      viewport.addChild(dotsLayer);

      // Start zoomed out so the whole field is visible immediately
      viewport.setZoom(0.15, true);
      viewport.moveCenter(WORLD_SIZE / 2, WORLD_SIZE / 2);

      const handleResize = () => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        viewport.resize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);
      app._onResize = handleResize;

      console.log('✅ Pixi v8 + Viewport + 1000 dots initialized!');
    };

    initPixi().catch((err) => console.error('Pixi init error:', err));

    return () => {
      cancelled = true;
      if (app) {
        window.removeEventListener('resize', app._onResize);
        app.destroy(true, { children: true });
        app = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    />
  );
}