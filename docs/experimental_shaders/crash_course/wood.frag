precision highp float;

void main() {
    float d = distance(vec2(300.0, 300.0), gl_FragCoord.xy);
    float d2 = distance(vec2(100.0, 100.0), gl_FragCoord.xy);
    float g = step(20.0, mod(d + d2, 40.0));
    gl_FragColor = vec4(g, g, g, 1.0);
}
