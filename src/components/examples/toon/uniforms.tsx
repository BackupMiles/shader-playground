import { Color, IUniform } from "three";
import { DEFAULT_UNIFORMS, TUniforms } from "../../../constants/uniforms";

export type TToonUniform = TUniforms & {
  u_depth_color: IUniform<Color>;
  u_surface_color: IUniform<Color>;
};

type TToonBuilderOptions = {
  depthColor: string;
  surfaceColor: string;
}

export const buildToonUniforms = ({ depthColor, surfaceColor }: TToonBuilderOptions): TToonUniform => ({
  ...DEFAULT_UNIFORMS,
  u_depth_color: { value: new Color(depthColor) },
  u_surface_color: { value: new Color(surfaceColor) }
});
