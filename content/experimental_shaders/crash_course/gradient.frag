precision highp float;

void main() {
    vec2 fragCoord_N = gl_FragCoord.xy / 600.0;
    gl_FragColor.rgb = vec3(abs(fragCoord_N.x * 2.0 - 1.0));
    gl_FragColor.a = 1.0;
}
