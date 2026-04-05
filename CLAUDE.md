# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Surgical external material request form for orthopedic surgery. Generates PDF reports with patient data, supplier selection, and requested implants/instruments. Part of the COT clinical tools suite — see parent `../CLAUDE.md` for shared conventions.

## Architecture

Single-file app (`index.html`, ~1020 lines) with one external data file:

- **`index.html`** — complete app: CSS variables + glassmorphism styles in `<style>`, HTML form with dynamic material blocks, all JS logic in `<script>`
- **`materiales.js`** — `CATALOGO` object mapping supplier names to arrays of `{ n, d }` (chip label / PDF description). Loaded via `<script src>` before main script

Uses **Design System B "Radiologia Glass"** (Source Serif 4 / Source Sans 3 / Source Code Pro, Slate Steel header, glassmorphism cards).

## Key Patterns

- **Dynamic material blocks**: `addMaterial()` creates numbered blocks (`bloque-N`) with logo grid, text inputs (`prov-N`, `mat-N`), and chip suggestions (`sugs-N`). `matCount` tracks the ID counter
- **Supplier logos**: embedded as base64 in `LOGOS_PROVEEDORES` object within index.html — no external image files
- **PDF generation**: `generarPDF()` uses html2canvas to render a temporary off-screen clone of `#informe-preview` at fixed 794px width, then jsPDF converts to A4 PDF
- **Auth guard**: line 2 checks `cot_auth` in localStorage, redirects to hub if expired (24h TTL). Skipped on localhost
- **Dark mode**: `[data-theme="dark"]` CSS variables, sky toggle (CSS-only sun/moon animation), stored in localStorage
- **Doctor data**: `firma_medico` and `firma_cnp` persist via localStorage

## CDN Dependencies

- **jsPDF** 2.5.1 (cdnjs) — PDF generation
- **html2canvas** 1.4.1 (cdnjs) — DOM-to-canvas rendering
- **Google Fonts** — Source Serif 4, Source Sans 3, Source Code Pro

No CDN fallback chain currently implemented (parent CLAUDE.md requires it — known gap).

## Common Modifications

- **Add a new supplier**: add entry to `LOGOS_PROVEEDORES` (with base64 logo) in index.html, add catalog entry in `materiales.js`
- **Add materials to existing supplier**: edit the corresponding array in `materiales.js`
- **Modify PDF layout**: edit the `generarPDF()` function's `styleClone.textContent` block (~line 977) and `generarInforme()` HTML generation (~line 858)

## Testing

No automated tests. Open `index.html` locally in a browser. Verify:
1. Logo selection populates chips from `CATALOGO`
2. "Ver informe" generates preview with correct data
3. "Descargar PDF" produces an A4 PDF with proper layout
4. Dark mode toggle works
5. Test on mobile viewport (logo grid switches to 2-column at 480px)
