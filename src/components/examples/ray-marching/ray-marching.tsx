import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import GUI from "lil-gui";
import { useEffect } from "react";
import { DEFAULT_UNIFORMS, TUniforms } from "../../../constants/uniforms";
import RendererInfo from "../../renderer-info";
import fragment from './fragment.glsl?raw';
import vertex from './vertex.glsl?raw';

type TRayMarchingUniforms = TUniforms & {

}

const buildGrassUniform = () => ({
  ...DEFAULT_UNIFORMS
})

const initializeGUI = (gui: GUI, uniforms: TRayMarchingUniforms) => {
  
}

const RayMarching = () => {
  const uniforms = buildGrassUniform();

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
      <mesh>
        <icosahedronGeometry args={[2, 100]} />
        <shaderMaterial
          fragmentShader={fragment}
          vertexShader={vertex}
          uniforms={uniforms}
        />
      </mesh>
    </Canvas>
  );
}

export default RayMarching;