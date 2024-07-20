import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GUI from "lil-gui";
import { useEffect } from "react";
import { DoubleSide, Vector3 } from "three";
import RendererInfo from "../../renderer-info";
import baseFragmentShader from './base/fragment.glsl?raw';
import baseVertexShader from './base/vertex.glsl?raw';
import { GrassBlade } from "./grass-blade";
import { buildGrassUniform } from "./uniforms";
import { initializeGUI } from "./utils";

const WindyGrass = () => {
  const uniforms = buildGrassUniform({
    bend: 2,
    color: "#51694f",
    height: 3
  });

  useEffect(() => {
    const gui = new GUI();
    initializeGUI(gui, uniforms);

    return () => {
      gui.destroy();
    };
  }, []);

  return (
    <Canvas
      className="w-full bg-black h-full"
      camera={{
        position: [2, 7, 2],
        fov: 75,
      }}
    >
      <RendererInfo uniforms={uniforms} />
      <OrbitControls />
      <axesHelper />
      {/* ground */}
      <mesh position={new Vector3(0, -1, 0)}>
        <icosahedronGeometry args={[2, 100]} />
        <shaderMaterial
          fragmentShader={baseFragmentShader}
          vertexShader={baseVertexShader}
          side={DoubleSide}
          uniforms={uniforms}
        />
      </mesh>
      {/* grass */}
      <GrassBlade position={new Vector3(0, 0.85, 0)} uniforms={uniforms} />
    </Canvas>
  );
};

export default WindyGrass;
