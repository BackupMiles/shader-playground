import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GUI from "lil-gui";
import { useEffect } from "react";
import { Vector3 } from "three";
import RendererInfo from "../../renderer-info";
import baseFragmentShader from './base/fragment.glsl?raw';
import baseVertexShader from './base/vertex.glsl?raw';
import grassFragmentShader from './grass/fragment.glsl?raw';
import grassVertexShader from './grass/vertex.glsl?raw';
import { buildGrassUniform } from "./uniforms";
import { initializeGUI } from "./utils";

const WindyGrass = () => {
  const uniforms = buildGrassUniform({
    color: "#EEEEEE",
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
        position: [0, 8, 5],
        fov: 75,
      }}
    >
      <RendererInfo uniforms={uniforms} />
      <OrbitControls />
      <axesHelper />
      <mesh>
        <icosahedronGeometry args={[2, 100]} />
        <shaderMaterial
          fragmentShader={baseFragmentShader}
          vertexShader={baseVertexShader}
          uniforms={uniforms}
        />
      </mesh>
      <mesh position={new Vector3(0, 2.5, 0)}>
        <planeGeometry args={[0.25, 2, 2, 2]} />
        <shaderMaterial fragmentShader={grassFragmentShader} vertexShader={grassVertexShader} uniforms={uniforms} wireframe />
      </mesh>
    </Canvas>
  );
};

export default WindyGrass;
