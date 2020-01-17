precision highp float;

void main() {
    
    float line = 300.0;
    line += mod(gl_FragCoord.x, 50.0);
    
    float g = step(line, gl_FragCoord.y);
    gl_FragColor = vec4(g, g, g, 1.0);
}
