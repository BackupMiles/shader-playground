import { IUniform, Mesh } from "three";

type RotatingCubeProps = {
    fragmentShader: string;
    vertexShader: string;
    uniforms: Record<string, IUniform<any>>;
    handleRefInit?: (m: Mesh) => void;
}

const Icosahedron = ({ fragmentShader, uniforms, vertexShader, handleRefInit }: RotatingCubeProps) => {
  return (
    <mesh ref={handleRefInit}>
      <icosahedronGeometry args={[4, 30]} />
      <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} uniforms={uniforms} />
    </mesh>
  );
};

export default Icosahedron;