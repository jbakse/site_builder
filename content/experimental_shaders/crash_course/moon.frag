precision highp float;

void main() {
    float s1 = sin(gl_FragCoord.x / 35.0) * 30.0;
    float s2 = sin(gl_FragCoord.x / 4.0) * 1.0;
    s1 = clamp(s1, - 10.0, 10.0);
    float moon = step(200.0, gl_FragCoord.y + s1 + s2);
    float sky = 1.0 - gl_FragCoord.y / 600.0;
    float g = min(moon, sky);
    gl_FragColor = vec4(g, g, g, 1.0);
}
