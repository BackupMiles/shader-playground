import { IUniform, Vector2 } from "three";

export type TUniforms = {
  u_mouse: IUniform<Vector2>;
  u_mouse_enabled: IUniform<boolean>;
  u_resolution: IUniform<Vector2>;
  u_time: IUniform<number>;
}

export const DEFAULT_UNIFORMS: TUniforms = {
  u_resolution: { value: new Vector2() },
  u_time: { value: 1.0 },
  u_mouse: { value: new Vector2() },
  u_mouse_enabled: { value: false },
}