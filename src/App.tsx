import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import './App.css'

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!containerRef.current) return;

    const scene = new THREE.Scene();
    const clock = new THREE.Clock();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio( window.devicePixelRatio );
    containerRef.current?.appendChild(renderer.domElement);

    const uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_resolution: { type: "v2", value: new THREE.Vector2() },
      u_mouse: { type: "v2", value: new THREE.Vector2() }
    };

    const material = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        // TODO: a vertex shader would be nice
        fragmentShader: document.getElementById('fragmentShader')!.textContent as string
    } );

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    onWindowResize();
    document.onmousemove = (e) => {
      uniforms.u_mouse.value.x = e.pageX
      uniforms.u_mouse.value.y = e.pageY
    }

    window.addEventListener('resize', onWindowResize);

    renderer.setAnimationLoop( animate );      

    function animate() {
      uniforms.u_time.value += clock.getDelta();

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render( scene, camera );
    }

    function onWindowResize() {
      renderer.setSize( window.innerWidth, window.innerHeight );
      uniforms.u_resolution.value.x = renderer.domElement.width;
      uniforms.u_resolution.value.y = renderer.domElement.height;
  }
  }, [containerRef.current]);

  return (
    <div ref={containerRef}>

    </div>
  )
}

export default App
