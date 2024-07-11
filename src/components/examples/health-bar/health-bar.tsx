import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GUI } from "lil-gui";
import { useEffect } from "react";
import fragmentShader from "../../../../src/assets/health-bar/fragment.glsl?raw";
import vertexShader from "../../../../src/assets/health-bar/vertex.glsl?raw";
import RendererInfo from "../../renderer-info";
import { buildHealthUniforms } from "./uniforms";
import { initializeGUI } from "./utils";

const HealthBar = () => {
  const uniforms = buildHealthUniforms({ 
    emptyColor: "#DDDDDD" ,
    healthColor: "#DDDDDD", 
    healthPercentage: 0.8
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
        position: [0, 0, 10],
        fov: 75,
      }}
    >
      <RendererInfo uniforms={uniforms} />
      <OrbitControls />
      <mesh>
        <planeGeometry args={[12, 3, 10, 10]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </mesh>
    </Canvas>
  );
};

export default HealthBar;
