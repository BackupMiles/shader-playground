import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GUI } from "lil-gui";
import { useEffect } from "react";
import fragmentShader from "../../../src/assets/raging-sea/fragment.glsl?raw";
import vertexShader from "../../../src/assets/raging-sea/vertex.glsl?raw";
import { DEFAULT_UNIFORMS } from "../../constants/uniforms";
import RendererInfo from "../renderer-info";

const RagingSea = () => {
  const uniforms = { ...DEFAULT_UNIFORMS };

  useEffect(() => {
    const gui = new GUI();
    gui
      .add(uniforms.u_big_waves_elevation, "value")
      .min(0)
      .max(1)
      .step(0.001)
      .name("uBigWavesElevation");

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
