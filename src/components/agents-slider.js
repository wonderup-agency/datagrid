import Swiper from "swiper";
import { Navigation } from "swiper/modules";
Swiper.use([Navigation]);

(() => {
  const component = document.querySelector("[data-component='agents-slider']");
  if (!component) return;

  const slider = component.querySelector(".swiper");
  const items = component.querySelectorAll("a");
  const mask = component.querySelector("[data-agents-slider='mask']");
  const blackout = component.querySelector("[data-agents-slider='blackout']");
  const prevEl = component.querySelector("[data-agents-slider='prev']");
  const nextEl = component.querySelector("[data-agents-slider='next']");

  if (!slider || !mask || !blackout || !prevEl || !nextEl) return;

  const urlPrefix = "https://docs.datagrid.com/connectors/";
  items.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const slug = href.replace(/^\/+|\/+$/g, "");
    if (slug) link.setAttribute("href", `${urlPrefix}${slug}`);
  });

  slider.append(mask, blackout);

  new Swiper(slider, {
    slidesPerView: "auto",
    navigation: {
      prevEl,
      nextEl,
    },
    on: {
      progress(swiper) {
        mask.style.opacity = swiper.progress === 1 ? 0 : 1;
      },
    },
  });
})();
