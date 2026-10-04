# Pigment website

The download page is a static GitHub Pages site published from `main`, directory `/docs`.

Public URL: https://ddrakkx.github.io/pigment/

- Page: `index.html`, styling: `style.css`, behaviour: `app.js`
- Real captures: `shots/` (desktop and terminal screenshots, one per wallpaper)
- Screen recordings: `site-assets/*.mp4` with `.jpg` posters, logo in `site-assets/logo.svg`
- `.nojekyll` keeps the HTML and assets unchanged during publication.

Push changes to this repository to publish the page. The application source is maintained separately in the private source repository. No bot credentials or application source belong in the website.

When shipping a new release, update the installer/portable links, checksums link, release label and approximate download sizes in `index.html`.

## Rules for images

Everything on the page is a real capture or an unedited screen recording of Pigment running on one PC — no staged renderer previews.

- Wallpapers in the captures are Steam Workshop items for Wallpaper Engine. `app.js` lists them with links to their Workshop pages; the footer credits them and the FAQ says they do not come with Pigment.
- Privacy: the terminal user and host name are replaced (screenshots) or blurred (recordings), and the used-memory figure is hidden. Recordings have no audio.
- The hero switcher in `app.js` uses the six palette swatches Pigment printed in each terminal capture. The page accent follows the selected wallpaper with the same rule Pigment uses for the terminal.
- Recordings autoplay muted only while visible; with reduced motion they stay as posters with controls.

The older gallery in `gallery/` is kept for the README and `GALLERY.md`.
