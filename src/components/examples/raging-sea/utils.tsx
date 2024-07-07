import GUI from "lil-gui";
import { TWavesUniform } from "./uniforms";

export const initializeGUI = (gui: GUI, uniforms: TWavesUniform) => {
  const waves = gui.addFolder("waves");
  waves
    .add(uniforms.u_big_waves_elevation, "value")
    .min(0)
    .max(1)
    .step(0.001)
    .name("u_big_waves_elevation");

  waves
    .add(uniforms.u_waves_elevation, "value")
    .min(0)
    .max(2)
    .step(0.001)
    .name("u_big_waves_elevation");

  waves
    .add(uniforms.u_big_waves_frequency.value, "x")
    .min(0)
    .max(10)
    .step(0.001)
    .name("u_big_waves_frequency_x");

  waves
    .add(uniforms.u_big_waves_frequency.value, "y")
    .min(0)
    .max(10)
    .step(0.001)
    .name("u_big_waves_frequency_y");

  waves
    .add(uniforms.u_big_waves_speed, "value")
    .min(0)
    .max(4)
    .step(0.001)
    .name("u_big_waves_speed");

  waves
    .add(uniforms.u_waves_multiplier, "value")
    .min(0)
    .max(10)
    .step(0.001)
    .name("u_waves_multiplier");


  const noise = waves.addFolder("noise");
  noise
    .add(uniforms.u_noise_amplifier, "value")
    .min(0)
    .max(1)
    .step(0.001)
    .name("u_noise_amplifier");

  noise
    .add(uniforms.u_perlin_frequency, "value")
    .min(0)
    .max(10)
    .step(1)
    .name("u_perlin_frequency");

  // colors
  const color = gui.addFolder("color");
  color
    .addColor(uniforms.u_depth_color, "value")
    .name("u_depth_color");

  color
    .addColor(uniforms.u_surface_color, "value")
    .name("u_surface_color");

  color
    .add(uniforms.u_color_offset, "value")
    .min(0)
    .max(10)
    .step(0.001)
    .name("u_color_offset");

  color
    .add(uniforms.u_color_multiplier, "value")
    .min(0)
    .max(10)
    .step(0.001)
    .name("u_color_multiplier");
};
