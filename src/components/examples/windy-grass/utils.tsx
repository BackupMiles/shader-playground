import GUI from "lil-gui";
import { TGrassUniforms } from "./uniforms";

export const initializeGUI = (gui: GUI, uniforms: TGrassUniforms) => {
  gui.addColor(uniforms.u_color, "value").name("u_color");
  gui.add(uniforms.u_height, "value").min(1).max(10).name("u_height");
  gui.add(uniforms.u_bend_factor, "value").min(-10).max(10).name("u_bend_factor");
}