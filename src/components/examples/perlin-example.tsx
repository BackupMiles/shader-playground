import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Vector2 } from "three";
import fragmentShader from "../../../src/assets/perlin/fragment.glsl?raw";
import vertexShader from "../../../src/assets/perlin/vertex.glsl?raw";
import Icosahedron from "../icosahedron";
import RendererInfo from "../renderer-info";

const uniforms = {
  u_time: { type: "f", value: 1.0 },
  u_resolution: { type: "v2", value: new Vector2() },
  u_mouse: { type: "v2", value: new Vector2() },
};

const PerlinExample = () => {
  const meshRef = useRef<Mesh>(null);

  return (
    <div id="canvas-container" className="h-full">
      <Canvas
        className="w-full bg-black h-full"
        camera={{
          position: [0, 5, 10],
          fov: 75,
        }}
      >
        <RendererInfo mesh={meshRef.current} uniforms={uniforms} />
        <Icosahedron fragmentShader={fragmentShader} uniforms={uniforms} vertexShader={vertexShader} />
      </Canvas>
    </div>
  );
};

export default PerlinExample;