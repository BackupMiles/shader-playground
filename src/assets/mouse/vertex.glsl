precision mediump float;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
uniform float u_time;

attribute vec3 position;
attribute float aRandom;

varying float vRandom;

void main()
{
    vec4 modelPosition = vec4(position, 1.0) * modelMatrix;
    modelPosition.z += aRandom * 0.5;
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;
    vRandom = aRandom;
}