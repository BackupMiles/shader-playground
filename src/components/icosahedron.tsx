import { forwardRef } from "react";
import { IUniform, Mesh } from "three";

type RotatingCubeProps = {
    fragmentShader: string,
    vertexShader: string,
    uniforms: Record<string, IUniform<any>>,
}

const Icosahedron = forwardRef<Mesh, RotatingCubeProps>(({ fragmentShader, uniforms, vertexShader }, ref) => {
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[4, 30]} />
      <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} wireframe={true} />
    </mesh>
  );
});

export default Icosahedron;