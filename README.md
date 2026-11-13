# NAMplified Web

Eigenständige statische Landingpage für das macOS-Plugin. Keine Abhängigkeiten und kein Build.

- Lokal: `index.html` im Browser öffnen oder `python3 -m http.server 8000` im Projektordner starten.
- GitHub Pages: Dateien einschließlich `.nojekyll` in ein eigenes Repository pushen. Unter **Settings → Pages → Deploy from a branch** den Branch `main` und den Ordner `/(root)` auswählen. Alle Asset-Pfade sind relativ.
- Blender: Den kurzen Render als H.264-MP4 (16:9, idealerweise ohne Ton) nach `assets/namplified-hero.mp4` exportieren. In `video.js` die Konstante `film` auf `"./assets/namplified-hero.mp4"` setzen. Das Video spielt stumm in Schleife, wenn der Browser es erlaubt und keine reduzierte Bewegung gewünscht ist; die Steuerelemente bleiben bedienbar.
- Release: Den Status erst durch Download- und Quelllinks ersetzen, wenn das konkrete Paket anhand der Release-Checkliste im Plugin-Repository geprüft wurde.
