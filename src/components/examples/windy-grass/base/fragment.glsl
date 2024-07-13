uniform vec2 u_resolution;

varying vec2 vUv;

void main() {
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  if (vUv.y < 0.7) {
    discard;
  }

  gl_FragColor = vec4(st.xy, 0., 1.);
}