import GUI from "lil-gui";
import { TBupUniforms } from "./uniforms";

export const initializeGUI = (gui: GUI, uniforms: TBupUniforms) => {
    gui.addColor(uniforms.u_depth_color, "value").name("u_depth_color");
    gui.addColor(uniforms.u_surface_color, "value").name("u_surface_color");
    gui.add(uniforms.u_color_offset, "value").name("u_color_offset").min(0).max(10).step(0.01);
    gui.add(uniforms.u_color_multiplier, "value").name("u_color_multiplier").min(0).max(10).step(0.01);
}