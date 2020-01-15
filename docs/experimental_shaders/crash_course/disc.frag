precision highp float;

void main() {
    float d = distance(vec2(300.0, 300.0), gl_FragCoord.xy);
    float g = smoothstep(100.0, 150.0, d);
    gl_FragColor = vec4(g, g, g, 1.0);
}
