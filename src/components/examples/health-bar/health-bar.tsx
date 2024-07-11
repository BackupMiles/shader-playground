import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GUI } from "lil-gui";
import { useEffect } from "react";
import fragmentShader from "../../../../src/assets/raging-sea/fragment.glsl?raw";
import vertexShader from "../../../../src/assets/raging-sea/vertex.glsl?raw";
import RendererInfo from "../../renderer-info";
import { buildHealthUniforms } from "./uniforms";
import { initializeGUI } from "./utils";

const HealthBar = () => {
  const uniforms = buildHealthUniforms({ 
    depthColor: "#DDDDDD" ,
    surfaceColor: "#DDDDDD", 
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
        <sphereGeometry args={[1, 100, 100]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
          wireframe
        />
      </mesh>
    </Canvas>
  );
};

export default HealthBar;
