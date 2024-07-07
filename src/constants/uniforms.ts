import { Vector2 } from "three";

export type TUniforms = {
  u_big_waves_elevation: any;
  u_big_waves_frequency: any;
  u_mouse: any;
  u_mouse_enabled: any;
  u_resolution: any;
  u_time: any;
}

export const DEFAULT_UNIFORMS: TUniforms = {
  u_big_waves_elevation: { type: "f", value: 0.2 },
  u_big_waves_frequency: { type: "v2", value: new Vector2(4, 1.5) },
  u_resolution: { type: "v2", value: new Vector2() },
  u_time: { type: "f", value: 1.0 },
  u_mouse: { type: "v2", value: new Vector2() },
  u_mouse_enabled: { type: "b", value: false },
}