import { Canvas } from "@react-three/fiber";
import RendererInfo from "../renderer-info";
import { DEFAULT_UNIFORMS } from "../../constants/uniforms";

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
                <shaderMaterial wireframe={true} />
            </mesh>
        </Canvas>
    )
}

export default BobbyBlob;