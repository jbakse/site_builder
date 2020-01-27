precision highp float;

void main() {
    float x = floor(gl_FragCoord.x / 50.0);
    float y = floor(gl_FragCoord.y / 50.0);
    float mask = mod(x + y, 2.0);
    
    float light = 1.0 - gl_FragCoord.y / 1200.0;
    float dark = 0.5 - gl_FragCoord.y / 1200.0;
    
    float g = mix(dark, light, mask);
    
    gl_FragColor = vec4(g, g, g, 1.0);
}
