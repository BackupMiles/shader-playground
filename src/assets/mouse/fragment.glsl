precision mediump float;

uniform float u_time;

varying float vRandom;

void main()
{
    gl_FragColor = vec4(abs(sin(u_time)), vRandom, 1.0, 1.0);
}