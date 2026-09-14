# FRACTAL – The Infinite Zoom Context Canvas

> **Proactive AI that finds hidden contradictions in documents without a single search query.**

Built for the **ZERO ORIGIN Hackathon 2026 — Round 1 Submission**.

---

## The Problem

Legal and financial professionals review 500+ page contracts using `Ctrl+F` and linear scrolling. This is fundamentally broken because **you cannot search for a risk you don't know exists** — the "unknown unknowns."

For example, a contract might contain:

- **Section 4.2:** *"The vendor assumes unlimited liability."*
- **Section 12.7:** *"Vendor liability is capped at $10,000."*

These contradictions can be buried hundreds of pages apart. By the time a lawyer finds them, millions of dollars in legal risk has been signed away.

---

## The Solution

**FRACTAL** transforms documents into an interactive **semantic galaxy**.

- Each dot represents a clause.
- Similar clauses cluster together (using UMAP dimensionality reduction).
- Dangerous or unusual clauses are automatically highlighted using **Isolation Forest** anomaly detection — no search query required.

Think of it like **Google Maps for legal documents**: zoom out to see the whole document, zoom in to read individual clauses.

---

## The Core Innovation

Traditional document search engines are **reactive** — they wait for the user to ask a question.

**FRACTAL is proactive.** By applying topological anomaly detection (Isolation Forest) directly to embedding vectors, we surface risks the user never knew to look for.

---

## Demo Features (Round 1 Prototype)

✅ Cinematic auto-demo (plays 2s after page load)  
✅ Infinite pan and scroll-wheel zoom  
✅ 1,005 clauses rendered as glowing dots  
✅ 5 semantic clusters (Payment, Termination, Indemnification, Confidentiality, Liability)  
✅ Auto-pulsing red anomalies (contradictions)  
✅ Click any dot to inspect the underlying clause  
✅ Anomaly modal with Isolation Forest confidence scores  
✅ Legend and live stats panel  

---

## Tech Stack

| Layer | Round 1 (Current) | Round 2 (Planned) |
| :--- | :--- | :--- |
| **Frontend** | HTML5 Canvas + JavaScript | Same |
| **Embeddings** | Hardcoded demo data | Google Gemini Embeddings |
| **Dimensionality Reduction** | N/A (pre-positioned clusters) | UMAP |
| **Anomaly Detection** | Simulated | Isolation Forest (Python) |
| **Deployment** | GitHub Pages | Same + Vercel |

---

## How to Run

1. Open `index.html` in any modern browser.
2. Wait 2 seconds for the cinematic auto-demo to begin.
3. Drag to pan. Scroll to zoom. Click any dot to inspect.

Zero dependencies. Zero build steps.

---

## How It Works

1. **Ingestion**: Split a document into 1-2 sentence chunks.
2. **Embedding**: Convert each chunk into a 768-dimension vector (semantic fingerprint).
3. **Dimensionality Reduction**: UMAP compresses vectors into 2D (X/Y coordinates).
4. **Anomaly Detection**: Isolation Forest identifies chunks that are mathematically isolated from their neighbors.
5. **Visualization**: Each chunk is a dot. Isolated anomalies glow red.

---

## Roadmap

- **Round 2**: Connect real Gemini API for live document embeddings.
- **Round 2**: Integrate Python backend (UMAP + Isolation Forest).
- **Round 3**: PDF upload, side-by-side text view, and search overlay.

---

**Stop scrolling. Start seeing.**