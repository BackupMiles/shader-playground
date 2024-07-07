import GUI from "lil-gui";
import { TWavesUniform } from "./uniforms";

export const initializeGUI = (gui: GUI, uniforms: TWavesUniform) => {
  gui
    .add(uniforms.u_big_waves_elevation, "value")
    .min(0)
    .max(1)
    .step(0.001)
    .name("uBigWavesElevation");

  gui
    .add(uniforms.u_big_waves_frequency.value, "x")
    .min(0)
    .max(10)
    .step(0.001)
    .name("uBigWavesFrequencyX");

  gui
    .add(uniforms.u_big_waves_frequency.value, "y")
    .min(0)
    .max(10)
    .step(0.001)
    .name("uBigWavesFrequencyY");

  gui
    .add(uniforms.u_big_waves_speed, "value")
    .min(0)
    .max(4)
    .step(0.001)
    .name("uBigWavesSpeed");
};
