varying vec2 vUv;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.);
  vec4 projected = projectionMatrix * mv;

  gl_Position = projected;
  vUv = uv;
}