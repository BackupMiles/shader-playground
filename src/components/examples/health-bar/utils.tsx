import GUI from "lil-gui";
import { THealthUniform } from "./uniforms";

export const initializeGUI = (gui: GUI, uniforms: THealthUniform) => {
  const health = gui.addFolder("health");
  health
    .add(uniforms.u_percentage, "value")
    .name("percentage")
    .min(0)
    .max(1)
    .step(0.01);

  // colors
  const color = gui.addFolder("color");
  color.addColor(uniforms.u_empty_color, "value").name("u_depth_color");
  color.addColor(uniforms.u_health_color, "value").name("u_surface_color");
};
