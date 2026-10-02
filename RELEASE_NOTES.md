# Pigment 0.1.2 beta — updates inside the app

## Download

- **Pigment-0.1.2-beta-setup-x64.exe** — branded Windows installer.
- **Pigment-0.1.2-beta-windows-x64.zip** — portable build; extract the entire archive.
- **SHA256SUMS.txt** — checksums for the binary downloads.

## New

- **Updates** page and tray entry: background release checks, release notes,
  a download progress bar, and an **Update** button.
- Installer downloads are verified against the official release SHA-256.
- Updating waits for Pigment to close and restarts it afterward. Settings and
  wallpapers are preserved. Portable builds keep their existing executable path.
- Automatic checks and beta releases can be disabled independently.
- Windows Terminal music preset opens all five effects around the player,
  temporarily hides the desktop clock, and preserves the command terminal on exit.
- Window movement with Win uses the latest cursor position rather than queueing
  every movement. Lyrics can use approximate word reveal for ordinary LRC.

## First update

Versions before 0.1.2 do not have the updater. Install this version manually once;
future compatible releases can be installed from the app.

## Beta status

The installer is unsigned. The app and installer were compiled for this release.
No new automated test suite was run. The complete in-app download, installation,
rollback, and restart cycle has not been verified on a clean Windows system.
The previously documented Wallpaper Engine and lyrics limitations still apply.

[Gallery](https://github.com/Ddrakkx/pigment/blob/main/docs/GALLERY.md) ·
[English](https://github.com/Ddrakkx/pigment) ·
[Русский](https://github.com/Ddrakkx/pigment/blob/main/README.ru.md)

This public repository contains downloads and documentation. Application sources
are private; GitHub's automatic source archives contain documentation only.
