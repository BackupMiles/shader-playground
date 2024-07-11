uniform vec2 u_mesh_resolution;
uniform vec2 u_resolution;
uniform float u_percentage;

varying vec2 vUv;

void main() {
    vec4 color = vec4(step(vUv.x, u_percentage), 0., 0., 1.);

    if (color.x < 0.001) {
        color = vec4(0.5, 0.5, 0.5, 1.);
    } 

    gl_FragColor = color;
}
