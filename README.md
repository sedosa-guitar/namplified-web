# NAMplified Web

Static landing page for the NAMplified macOS plugin. No dependencies or build step required.

- **Local preview.** Open `index.html` in your browser or run `python3 -m http.server 8000` from the project folder and visit `http://localhost:8000`.
- **GitHub Pages.** The site deploys from the root of the `main` branch. Keep `.nojekyll` in the repository root. Asset paths are relative so they work under the repository's Pages URL.
- **Blender teaser.** Export the render as an H.264 MP4 to `assets/namplified-hero.mp4`. The path is set in `video.js`. The video loops silently if the browser allows autoplay and the visitor has not requested reduced motion. The play/pause button is available for manual control.
- **Plugin releases.** Add download and matching source links after checking the actual release package against the release checklist in the plugin repository.
