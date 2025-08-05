import * as rive from "@rive-app/webgl2";

(() => {
  const canvas = document.querySelector("#home-hero-rive");

  if (!canvas || !rive || typeof rive.Rive === "undefined") return;

  const layout = new rive.Layout({
    fit: rive.Fit.Cover,
    alignment: rive.Alignment.TopCenter,
  });

  const riveFile =
    "https://cdn.prod.website-files.com/68831b52fc735726fbf24755/6892657bfe66bd406d1e2757_datagrid__hero.riv";

  const r = new rive.Rive({
    src: riveFile,
    canvas: canvas,
    layout: layout,
    autoplay: true,
    artboard: "Main",
    stateMachines: "State Machine",
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
      canvas.style.opacity = 1;
    },
  });
})();
