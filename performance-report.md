# Final HTML Task — Performance Report

**Intern name:** _[fill in]_
**Task:** Business Landing Page (HTML)
**Submission date:** _[fill in]_
**Repository:** _[add your GitHub repo link after pushing — see deployment steps below]_
**Live site:** _[add your GitHub Pages link after deploying — see deployment steps below]_

## 1. Task summary

Built a single-page business landing site ("Solstice Advisory," a strategy and operations consulting firm) covering every required section: navigation, hero, about, services, FAQ, testimonials, contact form, and footer.

## 2. How the requirements were met

| Requirement | Where it lives | Notes |
|---|---|---|
| Semantic HTML5 | `index.html` | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<details>/<summary>` for FAQ, `<blockquote>` for testimonials |
| Navigation | `<header class="site-header">` | Sticky nav with anchor links + mobile toggle |
| Hero section | `#top` | Headline, supporting copy, dual CTAs, stats row |
| About section | `#about` | Firm description + value points |
| Services section | `#services` | 3-card grid of service offerings |
| FAQ | `#faq` | Native `<details>` elements, accordion behaviour via `js/script.js` |
| Testimonials | `#testimonials` | 3 client quotes with attribution |
| Contact form | `#contact` | Labelled fields, `required`/`type` validation, front-end submit handling |
| Footer | `<footer class="site-footer">` | Sitemap, contact details, social links |

## 3. Project structure

```
index.html
css/style.css
js/script.js
images/ (7 original SVG assets)
README.md
```

## 4. What I'd improve with more time

- Wire the contact form to a real backend or email service (e.g. Formspree or a small serverless function) so submissions actually arrive somewhere, instead of only showing a front-end confirmation message.
- Add automated accessibility testing (axe-core or Lighthouse CI) to catch contrast, label, and focus-order regressions before they ship.
- Add a blog or case-study page to give the services section somewhere to link out to, and to demonstrate a second page template and shared header/footer partials.
- Add a lightweight build step (or at least CSS minification) since the project currently ships hand-written, unminified CSS and JS.

## 5. Challenges & how I solved them

- **Keeping the mobile nav accessible.** The toggle button needed to announce its state to assistive tech, not just visually slide the menu in. I added `aria-expanded` on the button and toggled it in `js/script.js` alongside the `.open` class, so screen readers get the same state change sighted users see.
- **Avoiding CSS specificity conflicts.** With element-based selectors (`section`, `.wrap`) sitting alongside component classes (`.service-card`, `.hero`), padding and margin rules were the easiest place for silent overrides. I kept section-level spacing on the bare `section` element and let components only control their own internal spacing, rather than letting both layers fight over the same property.
- **Making the FAQ behave like a single accordion.** Native `<details>` elements don't coordinate with each other by default, so multiple panels could stay open at once. I listened for the `toggle` event on each `<details>` and closed any sibling that was open, without needing a JS-built accordion from scratch.

## 6. Skills demonstrated

- Semantic HTML5 structuring
- Responsive CSS (Grid/Flexbox, mobile breakpoints)
- Basic vanilla JavaScript (DOM events, form handling)
- Git/GitHub workflow and GitHub Pages deployment
- Accessible markup (labels, alt text, focus states, skip link)


