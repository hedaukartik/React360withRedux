// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from "react-360-web";
import SimpleRaycaster from "simple-raycaster";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    cursorVisibility: "visible",
    ...options
  });

  // Render your app content to the default cylinder surface

  const homePanel = new Surface(500, 500, Surface.SurfaceShape.Flat);
  homePanel.setAngle(0.0, 0);
  const plansPanel = new Surface(500, 500, Surface.SurfaceShape.Flat);
  plansPanel.setAngle(1.0, 0);
  const devicePanel = new Surface(500, 500, Surface.SurfaceShape.Flat);
  devicePanel.setAngle(2.0, 0);
  const summmaryPanel = new Surface(500, 500, Surface.SurfaceShape.Flat);
  summmaryPanel.setAngle(3.0, 0);
  const endPanel = new Surface(500, 500, Surface.SurfaceShape.Flat);
  endPanel.setAngle(4.0, 0);
  // r360.renderToSurface(r360.createRoot("homePanel"), homePanel);
  r360.renderToSurface(r360.createRoot("plansPanel"), plansPanel);
  // r360.renderToSurface(r360.createRoot("devicePanel"), devicePanel);
  // r360.renderToSurface(r360.createRoot("summmaryPanel"), summmaryPanel);
  // r360.renderToSurface(r360.createRoot("endPanel"), endPanel);

  // Load the initial environment8
  r360.compositor.setBackground(r360.getAssetURL("360_world.jpg"));
  // r360.compositor.setBackground(r360.getAssetURL("Singtel.jfif")); //
  r360.controls.clearRaycasters();
  r360.controls.addRaycaster(SimpleRaycaster);
}

window.React360 = { init };
