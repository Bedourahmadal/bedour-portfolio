# Bedour Ahmad Alayyad — Portfolio

Bilingual (English / العربية) personal portfolio for **Bedour Ahmad Alayyad**, AI &amp; Extended Reality (XR) Developer.

Built as a static site in the **Sequence** design language — a near-white editorial surface with hairline borders and a single violet accent (`#a565ff`).

## Structure

```
bedour-portfolio/
├── index.html        # All content (EN + AR inline, toggled by language)
├── css/styles.css    # Sequence design system
├── js/main.js        # Language toggle (RTL/LTR), mobile nav
├── images/           # Project media — drop screenshots here
└── DESIGN.md         # Design-system reference
```

## Adding project images

Drop images into `images/` with these exact filenames and they appear automatically
(if a file is missing, a styled placeholder shows instead — nothing breaks):

| File | Project |
|------|---------|
| `images/mineral.jpg`   | AI Mineral Intelligence |
| `images/beautymr.jpg`  | BeautyMR |
| `images/vrlingo.jpg`   | VRlingo |
| `images/emergency.jpg` | AI Emergency Response Simulator |

## Language

The site loads in English by default. The **العربية / EN** button in the nav switches
the whole page between English (LTR) and Arabic (RTL); the choice is remembered.

## Local preview

```bash
python -m http.server 8899
```

Then open `http://localhost:8899`.

## Deployment

Hosted on **GitHub Pages** from the `main` branch.
