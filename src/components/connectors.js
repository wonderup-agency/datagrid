(() => {
  const component = document.querySelector("[data-component='connectors']");
  if (!component) return;

  // FILTERS MENU
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
    const target = e.target;
    if (
      (!filtersMenu.contains(target) && !filtersMenuButton.contains(target)) ||
      target == filtersMenu.querySelector('[fs-list-element="clear"]') ||
      target.nodeName == "INPUT"
    )
      closeMenu();
  }

  // SET URL ON ITEMS
  const list = component.querySelector("[fs-list-element='list']");
  if (!list) return;

  const urlPrefix = "https://docs.datagrid.com/connectors/";
  list.childNodes.forEach((item) => {
    const link = item.querySelector("a");
    const href = link.getAttribute("href") || "";
    const slug = href.replace(/^\/+|\/+$/g, "");
    if (slug) link.setAttribute("href", `${urlPrefix}${slug}`);
  });
})();
