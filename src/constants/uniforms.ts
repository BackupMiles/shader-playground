import { Vector2 } from "three";

export const DEFAULT_UNIFORMS = {
  u_time: { type: "f", value: 1.0 },
  u_resolution: { type: "v2", value: new Vector2() },
  u_mouse: { type: "v2", value: new Vector2() },
}