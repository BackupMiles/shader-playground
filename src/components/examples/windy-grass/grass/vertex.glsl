varying vec2 vUv;

uniform float u_bend_factor;
uniform float u_height;
uniform float u_time;

void main() {
    // TODO: make these variables external
    float bend = pow(u_bend_factor + (sin(u_time * 4.4) * 0.1) + 0.5, uv.y) - 1.;

    vec3 newPosition = position;
    newPosition.x += bend;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    vUv = uv;
}