import { Color, IUniform } from "three";
import { DEFAULT_UNIFORMS, TUniforms } from "../../../constants/uniforms";

export type THealthUniform = TUniforms & {
  u_empty_color: IUniform<Color>;
  u_health_color: IUniform<Color>;
  u_percentage: IUniform<Number>;
};

type THealthBuilderOptions = {
  emptyColor: string;
  healthColor: string;
  healthPercentage: number;
}

export const buildHealthUniforms = ({ emptyColor, healthColor, healthPercentage  }: THealthBuilderOptions): THealthUniform => ({
  ...DEFAULT_UNIFORMS,
  u_empty_color: { value: new Color(emptyColor) },
  u_health_color: { value: new Color(healthColor) },
  u_percentage: { value: healthPercentage },
});
