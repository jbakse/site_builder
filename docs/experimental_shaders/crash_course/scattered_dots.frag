precision highp float;

float rand(vec2 co) {
    return fract(sin(dot(co.xy , vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 i = floor(gl_FragCoord.xy / vec2(50.0, 50.0));
    vec2 f = fract(gl_FragCoord.xy / vec2(50.0, 50.0));
    
    vec2 offset = vec2(
        rand(i),
        rand(i + 1.0)
    );
    
    float d = distance(vec2(0.5, 0.5), f + offset * 0.3);
    float g = step(0.2, d);
    gl_FragColor = vec4(g, g, g, 1.0);
}
