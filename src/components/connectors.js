(() => {
  const component = document.querySelector("[data-component='connectors']");
  if (!component) return;

  const filtersMenuButton = component.querySelector(
    "[data-connectors='filters-menu-button']",
  );
  const filtersMenu = component.querySelector(
    "[data-connectors='filters-menu']",
  );

  if (!filtersMenuButton || !filtersMenu) return;

  filtersMenuButton.addEventListener("click", (e) => {
    const isExpanded =
      filtersMenuButton.getAttribute("aria-expanded") === "true";
    if (isExpanded) closeMenu();
    else openMenu();
  });

  function openMenu() {
    filtersMenuButton.setAttribute("aria-expanded", "true");
    filtersMenu.setAttribute("aria-hidden", "false");
    filtersMenu.removeAttribute("hidden");

    const firstFocusable = filtersMenu.querySelector("input");
    if (firstFocusable) firstFocusable.focus();

    document.addEventListener("click", handleOutsideClick);
  }

  function closeMenu() {
    filtersMenuButton.setAttribute("aria-expanded", "false");
    filtersMenu.setAttribute("aria-hidden", "true");
    filtersMenu.setAttribute("hidden", "true");

    document.removeEventListener("click", handleOutsideClick);
  }

  function handleOutsideClick(e) {
    if (
      !filtersMenu.contains(e.target) &&
      !filtersMenuButton.contains(e.target)
    )
      closeMenu();
  }
})();
