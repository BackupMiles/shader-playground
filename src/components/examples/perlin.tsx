import { Canvas } from "@react-three/fiber";
import fragmentShader from "../../../src/assets/perlin/fragment.glsl?raw";
import vertexShader from "../../../src/assets/perlin/vertex.glsl?raw";
import { DEFAULT_UNIFORMS } from "../../constants/uniforms";
import Icosahedron from "../icosahedron";
import RendererInfo from "../renderer-info";

const uniforms = { ...DEFAULT_UNIFORMS };

const Perlin = () => {
  return (
    <Canvas
      className="w-full bg-black h-full"
      camera={{
        position: [0, 5, 10],
        fov: 75,
      }}
    >
      <RendererInfo uniforms={uniforms} />
      <Icosahedron fragmentShader={fragmentShader} uniforms={uniforms} vertexShader={vertexShader} />
    </Canvas>
  );
};

export default Perlin;