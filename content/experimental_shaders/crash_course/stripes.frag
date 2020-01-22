void main() {
    highp float g = step(20.0, mod(gl_FragCoord.x, 50.0));
    gl_FragColor = vec4(g, g, g, 1.0);
}
