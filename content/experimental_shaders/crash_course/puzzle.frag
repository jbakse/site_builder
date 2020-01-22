precision highp float;

void main() {
    float d = distance(vec2(300.0, 300.0), gl_FragCoord.xy);
    float disc = step(100.0, d);
    float side = step(300.0, gl_FragCoord.x);
    float g = min(disc, side);
    gl_FragColor = vec4(g, g, g, 1.0);
}
