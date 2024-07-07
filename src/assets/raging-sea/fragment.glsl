varying vec4 aPosition;

void main() {
    #include <colorspace_fragment>
    vec3 baseColors = vec3(0., 0.9, 1.);
    baseColors.xyz += aPosition.z;
    gl_FragColor = vec4(baseColors, 1.);
}