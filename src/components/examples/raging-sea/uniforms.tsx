import { IUniform, Vector2 } from "three";
import { DEFAULT_UNIFORMS, TUniforms } from "../../../constants/uniforms";

export type TWavesUniform = TUniforms & {
  u_depth_color: IUniform<string>;
  u_surface_color: IUniform<string>;
  u_big_waves_speed: IUniform<number>;
  u_big_waves_elevation: IUniform<number>;
  u_big_waves_frequency: IUniform<Vector2>;
};

export const WAVES_UNIFORM: TWavesUniform = {
  ...DEFAULT_UNIFORMS,
  u_big_waves_elevation: { value: 0.2 },
  u_big_waves_frequency: { value: new Vector2(4, 1.5) },
  u_big_waves_speed: { value: 0.75 },
  u_depth_color: { value: "#0000ff" },
  u_surface_color: { value: "#8888ff" },
};
