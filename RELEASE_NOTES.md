# Pigment 0.1.3 beta

## Restore appearance during uninstall

- The uninstaller now includes **Restore appearance from before Pigment**, checked by default.
- After Pigment is closed, it restores backed-up Windows colors, supported integration settings and the saved lock-screen image before removing program files.
- Restoration runs without starting widgets, applying new colors or opening the main app.
- Cached classic Windows colors refresh immediately. Integrations may need to be reopened.
- If restoration fails or an entry was changed outside Pigment, removal stops with a report. Already restored entries can be retried safely. Clearing the checkbox deliberately keeps current appearance.
- Settings and backups remain available. Wallpaper choices and third-party applications are not rolled back; this is not a full Windows restore point.
- Existing 0.1.2 users can install this version from **Updates**. Older installers gain the new uninstaller after updating.

## Восстановление при удалении

- Галочка **«Вернуть оформление до Pigment»** включена по умолчанию.
- После закрытия Pigment восстанавливаются сохранённые изменения оформления, затем удаляются файлы приложения.
- При ошибках и сторонних изменениях удаление останавливается и показывает путь к отчёту; резервные копии сохраняются.
- Выбор обоев и установленные сторонние программы не откатываются.

## Beta checks

Application and installer compiled. No new automated tests were run. The complete installation/restoration/removal cycle has not been exercised on a clean Windows installation. The installer is unsigned. Previous Wallpaper Engine and lyrics-provider limitations remain.
