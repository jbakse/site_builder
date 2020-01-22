precision highp float;

float rand(vec2 co) {
    return fract(sin(dot(co.xy , vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    float r = rand(gl_FragCoord.xy * 0.001);
    gl_FragColor = vec4(vec3(r), 1.0);
}
