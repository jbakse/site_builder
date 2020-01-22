precision highp float;

void main() {
    float y = gl_FragCoord.y;
    y += sin(gl_FragCoord.x / 20.0) * 10.0;
    float g = step(20.0, mod(y, 50.0));
    gl_FragColor = vec4(g, g, g, 1.0);
}
