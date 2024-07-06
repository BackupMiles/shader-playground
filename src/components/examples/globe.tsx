import { Canvas } from "@react-three/fiber";
import { DEFAULT_UNIFORMS } from "../../constants/uniforms";
import RendererInfo from "../renderer-info";
import vertexShader from "../../../src/assets/globe/vertex.glsl?raw";
// import fragmentShader from "../../../src/assets/globe/fragment.glsl?raw";
import fragmentShader from "../../../src/assets/globe/fragment_mouse.glsl?raw";
import { OrbitControls } from "@react-three/drei";

const Globe = () => {
    const uniforms = { ...DEFAULT_UNIFORMS };

    return (
        <Canvas
        className="w-full bg-black h-full"
        camera={{
            position: [1, -1, 8],
            fov: 75,
        }}
        >
            <RendererInfo uniforms={uniforms} />
            <OrbitControls />
            <mesh>
                <sphereGeometry args={[3, 200]} />
                <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} wireframe />
            </mesh>
        </Canvas>
    );
}

export default Globe;