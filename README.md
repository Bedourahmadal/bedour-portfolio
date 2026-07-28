# Bedour Alayyad — XR Portfolio

A static, bilingual (English / Arabic) one-page portfolio. No build step, no framework, no backend.

## Preview locally

Any static server works. From the project root:

```bash
python -m http.server 8899
```

Then open <http://localhost:8899>.

## Publish

The site is published with **GitHub Pages** from the `main` branch, root folder.
Pushing to `main` deploys automatically:

```bash
git push origin main
```

Live at <https://bedourahmadal.github.io/bedour-portfolio/>

> After a deploy, new assets can take a minute to appear while the CDN refreshes.
> Hard-refresh with `Ctrl + Shift + R` to bypass the browser cache.

## Project structure

```text
index.html             all page markup
css/styles.css         all styles (numbered sections, CSS variables at the top)
js/main.js             content data + interactions
images/                project videos, poster frames, hero image
backup-pre-redesign/   previous version of index/css/js
```

## Editing content

Text lives in `index.html` as paired spans — `.lang-en` for English and `.lang-ar` for Arabic.
Edit both so the language toggle stays consistent.

**Projects and contact details are data-driven.** Open `js/main.js` and edit the two objects at the top:

```js
var CONTACT = { email, whatsapp, whatsappMessage, linkedin };

var PROJECTS = [
  {
    id, featured,            // featured: true renders a wide card
    title:       { en, ar },
    category:    { en, ar },
    description: { en, ar },
    features:    { en: [], ar: [] },   // optional bullet list in the modal
    mediaType:   'video' | 'image',
    media:       'images/…',
    poster:      'images/…',           // video poster frame
    technologies: []                   // only confirmed technologies
  }
];
```

The cards and the detail modal are both generated from `PROJECTS`, so adding a project
means adding one object.

## Media notes

- Project videos are muted, `playsinline`, and play only while on screen — never all at once.
- Every video has a poster frame, and nothing below the fold loads until it is needed.
- `images/emergency.mp4` is already compressed for web; keep the optimised version.
- The hero image is preloaded.

## Accessibility and motion

Semantic landmarks, a single `h1`, visible focus states, keyboard-operable navigation and
modal, and `prefers-reduced-motion` support for every animation.
