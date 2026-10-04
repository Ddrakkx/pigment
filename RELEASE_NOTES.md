# Pigment 0.1.7 beta

- New Triad mark: three interlocking letters P. It replaces Ribbon in the app icon, tray, window header, installer artwork and browser-extension icon.
- The terminal logo now turns clockwise around its own centre, facing you, instead of spinning around a vertical axis off to one side.
- The logo is rendered at the size of the pane (12 to 36 rows). In the `music` layout it no longer shrinks to a torn, single-colour sketch; it fills its window, or sits beside the system info when that keeps it large.
- Live Wallpaper Engine wallpapers: Pigment still recolors instantly from the preview, then checks what the engine actually draws a few seconds later and every ten minutes. Scenes with a day and night cycle or custom colours now get the right palette.

Application and installer builds are included. No new automated tests were run; a complete installation, update and uninstall cycle has not been exercised for this beta.

---
# Pigment 0.1.6 beta

- Removed the long front-facing pause from the terminal logo.
- Restored a uniform 5.76-second full turn, matching the previous rotation speed.
- The Ribbon shape, 3D shading and wallpaper colors stay the same.

---

# Pigment 0.1.5 beta

- New turquoise Ribbon identity: app icons, window marks, setup artwork and browser-extension icon share one vector outline.
- The terminal keeps the logo in 3D and uses wallpaper colors. Rotation slows down at the front, with less tilt, stable proportions and smoother character edges.
- The website and social profile avatars now use the Ribbon mark.

Application and installer builds are included. No new automated tests were run; a complete installation, update and uninstall cycle has not been exercised for this beta.

---

# Pigment 0.1.4 beta

## English by default

- New installations open in English, regardless of the Windows language.
- An existing explicit Russian selection is preserved.
- Settings, tray and desktop menus, wallpaper controls, clock dates, lyrics statuses and terminal system labels now have English translations.
- Choose **English** or **Русский** under **Desktop → More settings → Interface language**, then restart Pigment. The welcome tour also offers both languages.
- Saved layouts, custom menu labels, wallpaper names and song lyrics retain their original text.

The live music preset recording is in the [gallery](https://github.com/Ddrakkx/pigment#gallery). It shows one way to use Pigment; the app also includes wallpaper colors, desktop styles, widgets, a dock, window overview, globe search and much more.

## Русский

Теперь английский выбран по умолчанию. Ранее выбранный русский сохраняется. Язык можно сменить в **Рабочий стол → Дополнительные настройки → Язык интерфейса**, затем перезапустить Pigment.

## Beta status

Application and installer compiled. No new automated tests were run for this release. A complete fresh Windows installation, update and uninstall cycle has not been exercised. The installer remains unsigned. Previous lyrics-provider and Wallpaper Engine limitations remain.

Updates and restoration during uninstall from 0.1.3 remain included. Application source is private; this public repository contains downloads, documentation and gallery assets.
