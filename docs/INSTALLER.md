# Pigment Setup

**Experimental beta installer. Unsigned. The complete installation and removal
cycle has not been checked yet.**

The dark native window uses Pigment artwork and mint controls. English and
Russian are available. The setup executable contains the entire portable build
and runs with the current user's permissions; no Python or admin access is needed.

## What it does

- Installs under `%LOCALAPPDATA%\Programs\Pigment`.
- Extracts into a fresh version folder, retaining previous installed versions.
- Registers Pigment in the current user's Installed apps list.
- Creates a Start menu shortcut; the desktop shortcut is optional.
- Opens Pigment after installation only when its checkbox is selected.
- Leaves autostart and appearance setup to Pigment itself.
- Refuses an unrelated nonempty installation folder or paths containing directory links.
- Requires the installed Pigment to be closed before updating or removing it.

## Removal

Use Windows Installed apps or `UninstallPigment.exe` in the install folder.
The uninstaller checks the file manifest and hashes, removes only unchanged
files belonging to this installation, and preserves modified or unrelated files.
Owned shortcuts are removed only when their target points into the install folder.
Settings under `%LOCALAPPDATA%\Pigment` are preserved. Windows appearance is
not reverted automatically; restore it inside Pigment before removing the app.

A small cleanup helper runs from Windows Temp after the uninstaller closes.
It retains its own executable and result log in that temporary folder.

