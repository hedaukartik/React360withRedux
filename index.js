import React from "react";
import {
  AppRegistry,
  asset,
  NativeModules
} from "react-360";

import plansPanel from './src/scenes/plansPanel';
import devicesPanel from './src/scenes/devicesPanel';
import deviceDetailPanel from './src/scenes/deviceDetailPanel';


const { AudioModule } = NativeModules;
AudioModule.playEnvironmental({
  source: asset("static_assets/ChillingMusic.wav"),
  volume: 0.9 // play at 3/10 original volume
});

AppRegistry.registerComponent("plansPanel", () => plansPanel);
AppRegistry.registerComponent("devicesPanel", () => devicesPanel);
AppRegistry.registerComponent("deviceDetailPanel", () => deviceDetailPanel);

// AppRegistry.registerComponent("summmaryPanel", () => summmaryPanel);
// AppRegistry.registerComponent("endPanel", () => endPanel);
// AppRegistry.registerComponent("homePanel", () => homePanel);
