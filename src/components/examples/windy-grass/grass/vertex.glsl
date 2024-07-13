void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.);
  vec4 p = projectionMatrix * mv;

  gl_Position = p;
}