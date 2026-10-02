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
Starting with 0.1.3 beta, **Restore appearance from before Pigment** is checked
by default. Close Pigment from its tray menu first. The uninstaller runs the
installed app's restoration helper before scheduling file removal. It restores
backed-up Windows colors, supported integration files and the saved lock-screen
image, and refreshes cached system colors without starting the desktop UI.

If a backup is damaged, a file or value was changed outside Pigment, or restoration
fails, removal stops and shows the report location. Already restored entries are
safe to retry. You can review the report, restore manually, or deliberately clear
the checkbox to remove the app while retaining current appearance. Older installed
versions must be updated to support this helper.

Settings and backups under `%LOCALAPPDATA%\Pigment` are preserved. This restores
only changes for which Pigment saved an original; it is not a full Windows restore
point. Wallpaper selections, third-party app installation and later user changes
are not rolled back. Some integrations may need to be reopened to display restored
settings. Widgets and the dock disappear when Pigment is closed.

A small cleanup helper runs from Windows Temp after the uninstaller closes.
It retains its own executable and result log in that temporary folder.

## In-app updates

Starting with 0.1.2 beta, open **Updates** in Pigment. Press **Update** to download
the installer from the official GitHub release. Pigment verifies the installer's
SHA-256 before running it. Automatic checks do not install anything themselves.

The updater waits for the app to exit and starts it again afterward. Installer
builds install a fresh generation; portable builds replace their own program
files in place and keep previous files in a recovery folder. Settings under
`%LOCALAPPDATA%\Pigment` are preserved. On a portable file-replacement error,
the updater attempts to restore the files already replaced and relaunch the app.

The full update and recovery cycle has not yet been verified on a clean Windows
installation. Versions before 0.1.2 need one manual update to gain this feature.

