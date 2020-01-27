precision highp float;

void main() {
    vec2 i = floor(gl_FragCoord.xy / vec2(50.0, 50.0)); // unused!
    vec2 f = fract(gl_FragCoord.xy / vec2(50.0, 50.0));
    float d = distance(vec2(0.5, 0.5), f);
    float g = step(0.3, d);
    gl_FragColor = vec4(g, g, g, 1.0);
}
