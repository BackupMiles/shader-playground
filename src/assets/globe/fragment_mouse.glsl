varying vec2 vUv;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_time;

float pattern(float v, float s) {
    float x = fract(v * 10.0);
    return step(s, x);
}

float circle(in vec2 _st, in float _radius) {
    float dist = distance(_st, vec2(0.5));
    float big_enough = step(_radius, dist);
    return big_enough;
}

void main() {
    vec2 nm = u_mouse / u_resolution;
    vec2 wavedUv = vec2(
        vUv.x + sin(vUv.y * 30.0) * nm.x + sin(u_time) * 0.05,
        vUv.y + sin(vUv.x * 30.0) * nm.y + sin(u_time) * 0.05
    );

    float v1 = circle(wavedUv, 0.3);
    float v2 = 1. - circle(wavedUv, 0.35);
    float v = v1 * v2;

    vec3 mixed = mix(vec3(0.2), vec3(vUv, 1.0), v);

    gl_FragColor = vec4(mixed, 1.0);
}
