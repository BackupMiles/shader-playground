import { Color, IUniform } from "three";
import { DEFAULT_UNIFORMS, TUniforms } from "../../../constants/uniforms";

export type TGrassUniforms = TUniforms & {
  u_height: IUniform<Number>;
  u_color: IUniform<Color>;
};

export const buildGrassUniform = ({color, height} : {color: string, height: number}): TGrassUniforms => ({
  ...DEFAULT_UNIFORMS,
  u_color: { value: new Color(color) },
  u_height: { value: height }
});
