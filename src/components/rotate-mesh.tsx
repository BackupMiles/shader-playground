import { useFrame } from "@react-three/fiber";
import { IUniform, Mesh } from "three";

type RotateMeshProps = {
    mesh: Mesh;
    uniforms: Record<string, IUniform<any>>;
}

const RotateMesh = ({ mesh }: RotateMeshProps) => {
  useFrame((_, delta) => {
    mesh.rotation.x += delta;
    mesh.rotation.y += delta;
  });

    return null;
}

export default RotateMesh;