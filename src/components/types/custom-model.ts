import { TUniforms } from "../../constants/uniforms"

export type TCustomModel<T extends TUniforms> = {
  uniforms: T
}