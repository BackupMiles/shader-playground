import GUI from "lil-gui";
import { THealthUniform } from "./uniforms";

export const initializeGUI = (gui: GUI, uniforms: THealthUniform) => {
  // colors
  const color = gui.addFolder("color");
  color
    .addColor(uniforms.u_depth_color, "value")
    .name("u_depth_color");

  color
    .addColor(uniforms.u_surface_color, "value")
    .name("u_surface_color");
};
