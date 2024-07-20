import { Mesh, Object3D } from "three"

export const isMeshType = (object?: Object3D): object is Mesh => {
  return object?.type === 'Mesh'
}
