import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { Mesh, Vector2 } from "three";
import fragmentShader from "../src/assets/fragment.glsl?raw";
import RendererInfo from "./components/renderer-info";
import RotatingCube from "./components/rotating-cube";
import "./index.css";

const uniforms = {
  u_time: { type: "f", value: 1.0 },
  u_resolution: { type: "v2", value: new Vector2() },
  u_mouse: { type: "v2", value: new Vector2() },
};

const App = () => {
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
        <RotatingCube fragmentShader={fragmentShader} uniforms={uniforms} />
      </Canvas>
    </div>
  );
};

const root = document.getElementById("root");
if (!root) {
  throw new Error("could not find 'root' element");
}

createRoot(root).render(<App />);
