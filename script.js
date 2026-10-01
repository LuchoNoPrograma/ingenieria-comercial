// Blur the entire viewport above every layer, then clear it once content is ready.
const introRoot = document.documentElement;
const introOverlay = document.querySelector(".page-intro");
function finishIntro() {
  clearTimeout(window.pageIntroSafety);
  introRoot.classList.remove("intro-pending", "intro-running");
  introOverlay?.remove();
}
if (introRoot.classList.contains("intro-pending")) {
  const pageLoaded =
    document.readyState === "complete"
      ? Promise.resolve()
      : new Promise((resolve) =>
          window.addEventListener("load", resolve, { once: true }),
        );
  const fontsLoaded = document.fonts ? document.fonts.ready : Promise.resolve();
  Promise.race([
    Promise.all([pageLoaded, fontsLoaded]),
    new Promise((resolve) => setTimeout(resolve, 900)),
  ]).then(() => {
    if (!introRoot.classList.contains("intro-pending")) return;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        introOverlay.addEventListener("animationend", finishIntro, {
          once: true,
        });
        introRoot.classList.add("intro-running");
        setTimeout(finishIntro, 600);
      }),
    );
  });
} else {
  introOverlay?.remove();
}

const header = document.querySelector(".site-header");
const menu = document.querySelector("#navigation");
const menuToggle = document.querySelector(".menu-toggle");

function closeMenu() {
  menu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menú");
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menu.classList.toggle("is-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
});
menu
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.classList.contains("is-open")) {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!header.contains(event.target)) closeMenu();
});
window.matchMedia("(min-width: 721px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// Content remains visible if JS or IntersectionObserver is unavailable.
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));
  document.documentElement.classList.add("motion-ready");
}

// Keep only one video playing, and pause media once it leaves the screen.
const videos = [...document.querySelectorAll("video")];
videos.forEach((video) =>
  video.addEventListener("play", () => {
    videos.forEach((other) => {
      if (other !== video) other.pause();
    });
  }),
);
if ("IntersectionObserver" in window) {
  const mediaObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) entry.target.pause();
      });
    },
    { threshold: 0.1 },
  );
  videos.forEach((video) => mediaObserver.observe(video));
}

// Replay the tap animation, with its click rays, when a register button is pressed.
document.querySelectorAll(".cta-tap").forEach((tap) =>
  tap.querySelector("a").addEventListener("click", () => {
    tap.classList.remove("is-clicked");
    void tap.offsetWidth;
    tap.classList.add("is-clicked");
    setTimeout(() => tap.classList.remove("is-clicked"), 700);
  }),
);

// Open photos in a viewer at their natural proportions, with the card text.
const lightbox = document.querySelector(".lightbox");
const gallery = [...document.querySelectorAll("[data-lightbox]")];
let current = 0;
function showImage(index) {
  current = (index + gallery.length) % gallery.length;
  const item = gallery[current];
  const image = item.tagName === "IMG" ? item : item.querySelector("img");
  const caption = item.querySelector("figcaption");
  lightbox.querySelector("img").src = image.currentSrc || image.src;
  lightbox.querySelector("img").alt = image.alt;
  lightbox.querySelector("h3").textContent =
    caption?.querySelector("h2, h3")?.textContent || item.dataset.title || "";
  lightbox.querySelector("p").textContent =
    caption?.querySelector("p")?.textContent || image.alt;
}
gallery.forEach((item, index) => {
  const image = item.tagName === "IMG" ? item : item.querySelector("img");
  item.tabIndex = 0;
  item.setAttribute("role", "button");
  item.setAttribute("aria-label", `Ampliar imagen: ${image.alt}`);
  const open = () => {
    showImage(index);
    lightbox.showModal();
  };
  item.addEventListener("click", open);
  item.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  });
});
lightbox
  .querySelector(".lightbox-close")
  .addEventListener("click", () => lightbox.close());
lightbox
  .querySelector(".prev")
  .addEventListener("click", () => showImage(current - 1));
lightbox
  .querySelector(".next")
  .addEventListener("click", () => showImage(current + 1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showImage(current - 1);
  if (event.key === "ArrowRight") showImage(current + 1);
});
lightbox.addEventListener("close", () => gallery[current].focus());
