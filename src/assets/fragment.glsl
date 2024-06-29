precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec4 color = vec4(abs(sin(u_time)), 1.0, 0.5, 1.0);

    gl_FragColor=color;
}
