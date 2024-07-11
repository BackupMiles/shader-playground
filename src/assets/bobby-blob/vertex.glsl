uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

void main() {
    vec2 nm = u_mouse.xy/u_resolution.xy;
    vec2 np = position.xy/u_resolution.xy;
    vec4 mv = modelViewMatrix * vec4(position, 1.);

    // mv.x += sin(u_time * (mv.y));
    float v = smoothstep(0.5, mv.y, 1.);
    mv.y += sin(u_time) * step(0.5, np.y) >= 0.9 ? mv.y : 1.;
    // mv.y = 1.;
    // mv.x += distance(nm.xy, mv.xy);

    vec4 proj = projectionMatrix * mv;

    gl_Position = proj;
}