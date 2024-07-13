uniform float u_time;

varying vec2 vUv;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.);
  vec4 p = projectionMatrix * mv;

  if (uv.y > 0.5) {
    p.x -= abs(sin(u_time));
  }

  gl_Position = p;
  vUv = uv;
}