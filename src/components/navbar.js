import gsap from "gsap";

(() => {
  const component = document.querySelector("[data-component='navbar']");
  if (!component) return;

  const menuButton = component.querySelector("[data-navbar='menu-button']");
  const overlay = component.querySelector(".w-nav-overlay");

  menuButton.addEventListener("click", toggleScroll);
  overlay.addEventListener("click", toggleScroll);
  function toggleScroll() {
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
  }

  if (window.scrollY > 0) {
    component.classList.add("is-scrolled");
  }
  window.addEventListener("scroll", () => {
    component.classList.toggle("is-scrolled", window.scrollY > 0);
  });
})();
