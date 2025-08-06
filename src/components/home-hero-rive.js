import * as rive from "@rive-app/webgl2";
import grained from "../utils/grained.js";

(() => {
  // GRID BG
  const bgGrid = document.querySelector("[data-home-hero='bg-grid']");
  if (bgGrid) {
    const sections = document.querySelectorAll("section");
    const firstSection = sections[0] || null;
    const secondSection = sections[1] || null;
    let totalHeight = 0;
    if (firstSection) totalHeight += firstSection.offsetHeight;
    if (secondSection) totalHeight += secondSection.offsetHeight;
    bgGrid.style.height = `${totalHeight}px`;
  }

  // RIVE
  const canvas = document.querySelector("[data-component='home-hero-rive']");

  if (!canvas || !rive || typeof rive.Rive === "undefined") {
    console.warn("Missing required properties for Rive component");
    return;
  }

  const src = canvas.dataset.src.trim();
  const artboard = canvas.dataset.artboard.trim();
  const stateMachines = canvas.dataset.stateMachines.trim();

  if (!src || !artboard || !stateMachines) {
    console.warn("Missing required properties for Rive component");
    return;
  }

  const layout = new rive.Layout({
    fit: rive.Fit.Cover,
    alignment: rive.Alignment.TopCenter,
  });

  const r = new rive.Rive({
    src: src,
    canvas: canvas,
    layout: layout,
    autoplay: true,
    artboard: artboard,
    stateMachines: stateMachines,
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
      canvas.style.opacity = 1;
    },
  });

  // GRAIN
  const grainElement = document.querySelector('[data-home-hero="grain"]');
  var options = {
    animate: true,
    patternWidth: 500,
    patternHeight: 500,
    grainOpacity: 0.125,
    grainDensity: 2,
    grainWidth: 1,
    grainHeight: 1,
  };
  grained(grainElement, options);
  grainElement.style.opacity = 1;
  grainElement.parentElement.style.height = canvas.offsetHeight + "px";
})();
