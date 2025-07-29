import Swiper from "swiper";
import { Navigation } from "swiper/modules";
Swiper.use([Navigation]);

(() => {
  const component = document.querySelector("[data-component='stories-slider']");
  if (!component) return;

  const slider = component.querySelector(".swiper");
  const mask = component.querySelector("[data-stories-slider='mask']");
  const blackout = component.querySelector("[data-stories-slider='blackout']");
  const prevEl = component.querySelector("[data-stories-slider='prev']");
  const nextEl = component.querySelector("[data-stories-slider='next']");

  if (!slider || !mask || !blackout || !prevEl || !nextEl) return;

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
