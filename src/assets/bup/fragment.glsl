uniform vec3 u_depth_color;
uniform vec3 u_surface_color;
uniform float u_color_offset;
uniform float u_color_multiplier;
varying float vDepth;

void main() {
    vec3 color = mix(u_depth_color, u_surface_color, (vDepth + u_color_offset) * u_color_multiplier);

    gl_FragColor = vec4(color, 1.);
}