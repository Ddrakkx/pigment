# Pigment website

The download page is a static GitHub Pages site published from `main`, directory `/docs`.

Public URL: https://ddrakkx.github.io/pigment/

- Page: `index.html`
- Styling: `style.css`
- Gallery viewer: `app.js`
- Existing preview assets: `gallery/` and `text-player-en.gif`
- Logo and real demo: `site-assets/`
- `.nojekyll` keeps the HTML and assets unchanged during publication.

Push changes to this repository to publish the page. The application source is maintained separately in the private source repository. No bot credentials or application source belong in the website.

When shipping a new release, update the installer/portable links, checksums link, release label and approximate download sizes in `index.html`.

Gallery attribution is linked on the page; preserve credits and the distinction between the real desktop recording and staged renderer previews.

The home page presents the entire app: Dock & Start, window overview, globe search,
desktop widgets, Windows Terminal, music and wallpaper colors. The first screen
uses multiple wallpaper previews. Keep the music recording as one usage example,
below the feature overview and gallery. Do not imply that its forest wallpaper
or third-party music comes with Pigment. The globe animation uses the production
globe painter with no search results or personal data. Its silent 20-second loop
shows one revolution at three times the native speed. It loads when visible,
pauses offscreen or in a hidden tab, and starts as a poster when reduced motion
is requested. The play/pause button allows a manual choice.
