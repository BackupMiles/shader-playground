import { Canvas } from "@react-three/fiber";
import RendererInfo from "../renderer-info";
import { DEFAULT_UNIFORMS } from "../../constants/uniforms";
import fragment from "../../assets/bobby-blob/fragment.glsl?raw";
import vertex from "../../assets/bobby-blob/vertex.glsl?raw";

const uniforms = { ...DEFAULT_UNIFORMS };

const BobbyBlob = () => {
    return (
        <Canvas
        className="w-full bg-black h-full"
        camera={{
            position: [0, 5, 10],
            fov: 75,
        }}
        >
            <RendererInfo uniforms={uniforms} />
            <mesh>
                <icosahedronGeometry args={[5, 5]} />
                <shaderMaterial fragmentShader={fragment} vertexShader={vertex} uniforms={uniforms} />
            </mesh>
        </Canvas>
    )
}

export default BobbyBlob;