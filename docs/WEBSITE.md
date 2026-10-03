# Pigment website

The download page is a static GitHub Pages site published from `main`, directory `/docs`.

- Page: `index.html`
- Styling: `style.css`
- Gallery viewer: `app.js`
- Existing preview assets: `gallery/` and `text-player-en.gif`
- Logo and real demo: `site-assets/`
- `.nojekyll` keeps the HTML and assets unchanged during publication.

Push changes to this repository to publish the page. The application source is maintained separately in the private source repository. No bot credentials or application source belong in the website.

When shipping a new release, update the installer/portable links, checksums link, release label and approximate download sizes in `index.html`.

Gallery attribution is linked on the page; preserve credits and the distinction between the real desktop recording and staged renderer previews.
