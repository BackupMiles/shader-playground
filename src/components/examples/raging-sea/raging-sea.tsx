import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GUI } from "lil-gui";
import { useEffect } from "react";
import fragmentShader from "../../../../src/assets/raging-sea/fragment.glsl?raw";
import vertexShader from "../../../../src/assets/raging-sea/vertex.glsl?raw";
import RendererInfo from "../../renderer-info";
import { buildWavesUniform } from "./uniforms";
import { initializeGUI } from "./utils";

const RagingSea = () => {
  const uniforms = buildWavesUniform({ 
    depthColor: "#121265" ,
    surfaceColor: "#0892b4", 
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
        position: [0, -2, 2],
        fov: 75,
      }}
    >
      <RendererInfo uniforms={uniforms} />
      <OrbitControls />
      <mesh>
        <planeGeometry args={[2, 2, 128, 128]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </mesh>
    </Canvas>
  );
};

export default RagingSea;
