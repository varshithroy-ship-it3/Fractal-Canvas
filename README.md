# FRACTAL

> **An infinite zoom semantic canvas for finding hidden contradictions in documents.**

---

## What is FRACTAL?

FRACTAL transforms dense legal and financial documents into an interactive **semantic galaxy**.

Every dot represents a clause. Similar clauses cluster together. Dangerous or contradictory clauses are automatically highlighted in red using topological anomaly detection — **no search query required**.

Think of it as **Google Maps for 500-page contracts**.

---

## The Problem

Legal professionals rely on `Ctrl+F` to find risks in contracts. This is fundamentally broken because **you cannot search for a risk you don't know exists**.

Consider a contract with:
- **Section 4.2**: *"The vendor assumes unlimited liability."*
- **Section 12.7**: *"Vendor liability is capped at $10,000."*

These contradictions can be buried hundreds of pages apart. By the time a lawyer finds them, millions of dollars in risk has been signed away.

---

## The Innovation

Traditional search tools are **reactive** — they wait for a user to type a keyword.

FRACTAL is **proactive**. We apply Isolation Forest (topological anomaly detection) directly to text embedding vectors. Clauses that are mathematically isolated from their semantic neighbors are automatically flagged as anomalies.

**The user doesn't need to know what to search for. The system finds the risk.**

---

## How It Works

1. **Split**: A document is broken into sentence-level chunks.
2. **Embed**: Each chunk is converted into a 768-dimensional vector (a semantic fingerprint).
3. **Reduce**: UMAP compresses the vectors into 2D coordinates.
4. **Detect**: Isolation Forest identifies chunks that are statistically isolated.
5. **Visualize**: Each chunk becomes a glowing dot. Anomalies glow red.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| Frontend | HTML5 Canvas + JavaScript |
| Embeddings | Google Gemini (planned) |
| Dimensionality Reduction | UMAP (planned) |
| Anomaly Detection | Isolation Forest / PyOD (planned) |
| Deployment | GitHub Pages |

---

## Live Demo

🔗 **[View the live demo](https://your-username.github.io/zero-origin/)**

Wait 2 seconds after the page loads — a cinematic walkthrough will begin automatically.

- **Drag** to pan
- **Scroll** to zoom
- **Click any dot** to inspect the underlying clause

---

## Roadmap

- [x] Interactive infinite pan/zoom canvas
- [x] Semantic cluster visualization
- [x] Anomaly highlighting (simulated)
- [ ] Live Gemini API integration
- [ ] Python backend for real Isolation Forest computation
- [ ] PDF upload and side-by-side text viewer

---

## Running Locally

Open `index.html` in any modern browser. Zero dependencies. Zero build steps.

---

**Stop scrolling. Start seeing.**
