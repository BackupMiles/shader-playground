import { Canvas } from "@react-three/fiber";
import { useCallback } from "react";
import { BufferAttribute, PlaneGeometry } from "three";
import fragmentShader from "../../../src/assets/plane-noise/fragment.glsl?raw";
import vertexShader from "../../../src/assets/plane-noise/vertex.glsl?raw";
import { DEFAULT_UNIFORMS } from "../../constants/uniforms";
import RendererInfo from "../renderer-info";

const uniforms = { ...DEFAULT_UNIFORMS };

const PlaneNoise = () => {
    const initGeometry = useCallback((geometry: PlaneGeometry) => {
        const count = geometry.attributes.position.count;
        const randoms = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            randoms[i] = Math.random();
        }

        const aRandom = new BufferAttribute(randoms, 1);
        geometry.setAttribute('aRandom', aRandom);
    }, []);

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
                <planeGeometry ref={initGeometry} args={[5, 5, 10, 10]} />
                {/* <shaderMaterial vertexShader={vertexShader} uniforms={uniforms} wireframe={true} /> */}
                <rawShaderMaterial uniforms={uniforms} fragmentShader={fragmentShader} vertexShader={vertexShader} wireframe={false} />
            </mesh>
        </Canvas>
    )
}

export default PlaneNoise;