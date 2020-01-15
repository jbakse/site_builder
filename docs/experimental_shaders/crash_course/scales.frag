#ifdef GL_ES
precision mediump float;
#endif

void main() {
    vec2 fragCoord_N = gl_FragCoord.xy / 600.0;
    float a = sin(fragCoord_N.x * 2.0 * 3.14 * 10.0);
    float b = sin(fragCoord_N.y * 3.14 * 10.0);
    float g = a + b;
    g = abs(g * 0.5);
    g = pow(g, 0.5);
    gl_FragColor = vec4(g, g, g, 1.0);
}
