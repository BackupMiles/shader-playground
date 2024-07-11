import { Color, IUniform } from "three";
import { DEFAULT_UNIFORMS, TUniforms } from "../../../constants/uniforms";

export type THealthUniform = TUniforms & {
  u_depth_color: IUniform<Color>;
  u_surface_color: IUniform<Color>;
};

type THealthBuilderOptions = {
  depthColor: string;
  surfaceColor: string;
}

export const buildHealthUniforms = ({ depthColor, surfaceColor }: THealthBuilderOptions): THealthUniform => ({
  ...DEFAULT_UNIFORMS,
  u_depth_color: { value: new Color(depthColor) },
  u_surface_color: { value: new Color(surfaceColor) }
});
