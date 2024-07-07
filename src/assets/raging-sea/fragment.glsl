uniform float u_color_offset;
uniform float u_color_multiplier;
uniform vec3 u_depth_color;
uniform vec3 u_surface_color;

varying float vElevation;

void main() {
    #include <colorspace_fragment>
    vec3 color = mix(u_depth_color, u_surface_color, (vElevation + u_color_offset) * u_color_multiplier);
    gl_FragColor = vec4(color, 1.);
}