import { forwardRef } from "react";
import { IUniform, Mesh } from "three";

type RotatingCubeProps = {
    fragmentShader: string,
    uniforms: Record<string, IUniform<any>>,
}

const RotatingCube = forwardRef<Mesh, RotatingCubeProps>(({ fragmentShader, uniforms }, ref) => {
  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <shaderMaterial fragmentShader={fragmentShader} uniforms={uniforms} />
    </mesh>
  );
});

export default RotatingCube;