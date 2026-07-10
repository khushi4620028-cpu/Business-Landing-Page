# Solstice Advisory — Business Landing Page

A single-page landing site for **Solstice Advisory**, a fictional strategy and operations consulting firm, built as a final HTML internship task.

## Live site
`[add your GitHub Pages link here after deploying]`

## Project structure
```
index.html          Semantic HTML5 markup for all sections
css/style.css        Design tokens, layout, and responsive rules
js/script.js          Mobile nav toggle, FAQ accordion, contact form handling
images/               7 original SVG assets (logo, favicon, icons, illustrations)
README.md
```

## Sections
- Sticky navigation with mobile menu toggle
- Hero with headline, CTAs, and stats
- About, with firm description and value points
- Services (3-card grid)
- FAQ (native `<details>`/`<summary>`, accordion-style via JS)
- Testimonials
- Contact form with client-side validation and submit feedback
- Footer with sitemap, contact details, and social links

## Design notes
The visual identity is built around a "turning point" motif (a rising arc reaching a peak) that echoes the firm's name and its positioning — helping clients find and build past a strategic turning point. Palette: ink navy, warm parchment, slate blue, and a brass accent. Type: Fraunces (display serif) paired with IBM Plex Sans (body) and IBM Plex Mono (labels/data).

## Running locally
Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:
```
python3 -m http.server 8000
```

## Deployment
Deployed via GitHub Pages from the `main` branch, `/ (root)` folder.
