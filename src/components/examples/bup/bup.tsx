import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GUI from "lil-gui";
import { useEffect } from "react";
import fragmentShader from "../../../../src/assets/bup/fragment.glsl?raw";
import vertexShader from "../../../../src/assets/bup/vertex.glsl?raw";
import RendererInfo from "../../renderer-info";
import { buildBupUniforms } from "./uniforms";
import { initializeGUI } from "./utils";

const Bup = () => {
  const uniforms = buildBupUniforms({ 
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
        position: [10, 2, 2],
        fov: 75,
      }}
    >
      <OrbitControls />
      <RendererInfo uniforms={uniforms} />
      <mesh>
        <sphereGeometry args={[5, 100, 100]} />
        <shaderMaterial fragmentShader={fragmentShader} uniforms={uniforms} vertexShader={vertexShader} />
      </mesh>
    </Canvas>
  );
};

export default Bup;
