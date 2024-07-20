precision mediump float;

varying float vElevation;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;

    gl_FragColor = vec4(vec3(vElevation), 1.0);
}
