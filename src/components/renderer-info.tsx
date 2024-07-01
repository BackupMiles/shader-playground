import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { IUniform } from "three";

type RendererInfoProps = {
    uniforms: Record<string, IUniform<any>>;
}

const RendererInfo = ({ uniforms }: RendererInfoProps) => {
  const { gl } = useThree();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      uniforms.u_mouse.value.x = e.pageX;
      uniforms.u_mouse.value.y = e.pageY;
    };

    const handleWindowResize = (_e?: UIEvent) => {
      uniforms.u_resolution.value.x = gl.domElement.width;
      uniforms.u_resolution.value.y = gl.domElement.height;
    };

    handleWindowResize();

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("resize", handleWindowResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("resize", handleWindowResize);
    };
  });

  useFrame((_, delta) => {
    // update time uniform
    uniforms.u_time.value += delta;
  });

  return null;
};

  export default RendererInfo;