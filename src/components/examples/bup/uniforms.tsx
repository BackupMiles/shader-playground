import { Color, IUniform } from "three";
import { DEFAULT_UNIFORMS, TUniforms } from "../../../constants/uniforms";

export type TBupUniforms = TUniforms & {
  u_depth_color: IUniform<Color>;
  u_surface_color: IUniform<Color>;
  u_color_offset: IUniform<Number>;
  u_color_multiplier: IUniform<Number>;
};

type THealthBuilderOptions = {
  depthColor: string;
  surfaceColor: string;
}

export const buildBupUniforms = ({ depthColor, surfaceColor }: THealthBuilderOptions): TBupUniforms => ({
  ...DEFAULT_UNIFORMS,
  u_depth_color: { value: new Color(depthColor) },
  u_surface_color: { value: new Color(surfaceColor) },
  u_color_offset: { value: 0.5 },
  u_color_multiplier: { value: 1 },
});
