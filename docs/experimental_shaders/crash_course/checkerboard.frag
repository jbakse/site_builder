precision highp float;

void main() {
    float x = floor(gl_FragCoord.x / 50.0);
    float y = floor(gl_FragCoord.y / 50.0);
    float g = mod(x + y, 2.0);
    
    // float v = mod(x, 2.0);
    // float h = mod(y, 2.0);
    // float g = abs(h - v);
    
    gl_FragColor = vec4(g, g, g, 1.0);
}
