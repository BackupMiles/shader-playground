import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GUI } from "lil-gui";
import { useEffect } from "react";
import fragmentShader from "../../../../src/assets/health-bar/fragment.glsl?raw";
import vertexShader from "../../../../src/assets/health-bar/vertex.glsl?raw";
import RendererInfo from "../../renderer-info";
import { HealthBarModel } from "./health-bar-model";
import { buildHealthUniforms } from "./uniforms";
import { initializeGUI } from "./utils";

const HealthBar = () => {
  const uniforms = buildHealthUniforms({ 
    emptyColor: "#DDDDDD" ,
    healthColor: "#DDDDDD", 
    healthPercentage: 0.8
  });

  const gltfPath = "health_box.glb";

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
        position: [10, 2, 2],
        fov: 75,
      }}
    >
      <ambientLight args={['#FFFFFF', 1.]} />
      <pointLight position={[10, 10, 10]} />
      <RendererInfo uniforms={uniforms} />
      <OrbitControls />
      <HealthBarModel fragmentShader={fragmentShader} vertexShader={vertexShader} gltfPath={gltfPath} uniforms={uniforms}  />
    </Canvas>
  );
};

export default HealthBar;
