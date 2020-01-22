precision highp float;

void main() {
    float d = distance(vec2(300.0, 300.0), gl_FragCoord.xy);
    float background = gl_FragCoord.y / 600.0;
    background = background * 0.3 + 0.4;
    
    float foreground = gl_FragCoord.x / 600.0 + (gl_FragCoord.y - 300.0) / 200.0;
    foreground = 1.0 - abs(foreground - 0.5) * 2.0;
    foreground = clamp(foreground, 0.0, 1.0);
    foreground = pow(foreground, 4.0);
    
    float g = mix(foreground, background, step(200.0, d));
    
    gl_FragColor = vec4(g, g, g, 1.0);
}
