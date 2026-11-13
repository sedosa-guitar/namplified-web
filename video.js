// Set this to "./assets/namplified-hero.mp4" when the Blender render is ready.
const film = "./assets/namplified-hero.mp4";

if (film) {
  const stage = document.querySelector(".poster");
  const controls = document.querySelector("#film-controls");
  const video = document.createElement("video");
  video.muted = true;
  video.playsInline = true;
  video.loop = true;
  video.hidden = true;
  video.setAttribute("aria-label", "NAMplified product film");
  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.textContent = "▶\uFE0E";
  toggle.setAttribute("aria-label", "Play film");
  toggle.hidden = true;
  controls.append(toggle);

  toggle.addEventListener("click", () => {
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
  video.addEventListener("playing", () => {
    toggle.textContent = "⏸\uFE0E";
    toggle.setAttribute("aria-label", "Pause film");
  });
  video.addEventListener("pause", () => {
    toggle.textContent = "▶\uFE0E";
    toggle.setAttribute("aria-label", "Play film");
  });

  video.addEventListener("loadeddata", () => {
    video.hidden = false;
    toggle.hidden = false;
    controls.hidden = false;
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.play().catch(() => {});
    }
  }, { once: true });
  video.addEventListener("error", () => {
    video.hidden = true;
    toggle.hidden = true;
    controls.hidden = true;
  });
  video.src = film;
  stage.append(video);
}
