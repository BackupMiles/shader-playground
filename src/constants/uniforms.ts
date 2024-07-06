import { Vector2 } from "three";

export type TUniforms = {
  u_mouse_enabled: any;
  u_mouse: any;
  u_resolution: any;
  u_time: any;
}

export const DEFAULT_UNIFORMS: TUniforms = {
  u_time: { type: "f", value: 1.0 },
  u_resolution: { type: "v2", value: new Vector2() },
  u_mouse: { type: "v2", value: new Vector2() },
  u_mouse_enabled: { type: "b", value: false },
}