import React from "react";
import {
  AppRegistry,
  asset,
  NativeModules
} from "react-360";

import plansPanel from './src/scenes/plansPanel'

const { AudioModule } = NativeModules;
AudioModule.playEnvironmental({
  source: asset("static_assets/ChillingMusic.wav"),
  volume: 0.9 // play at 3/10 original volume
});

AppRegistry.registerComponent("plansPanel", () => plansPanel);
// AppRegistry.registerComponent("devicePanel", () => devicePanel);
// AppRegistry.registerComponent("summmaryPanel", () => summmaryPanel);
// AppRegistry.registerComponent("endPanel", () => endPanel);
// AppRegistry.registerComponent("homePanel", () => homePanel);
