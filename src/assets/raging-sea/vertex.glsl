uniform float u_big_waves_speed;
uniform float u_big_waves_elevation;
uniform vec2 u_big_waves_frequency;
uniform float u_time;

varying vec4 aPosition;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.);

  float elevation = sin(modelPosition.x * u_big_waves_frequency.x + u_time * u_big_waves_speed) * u_big_waves_elevation;
  elevation *= sin(modelPosition.y * u_big_waves_frequency.y + u_time * u_big_waves_speed);
  modelPosition.z += elevation;

  aPosition = modelPosition;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 p = projectionMatrix * viewPosition;
  gl_Position = p;
}