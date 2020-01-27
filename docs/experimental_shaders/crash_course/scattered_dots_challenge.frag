precision highp float;

float rand(vec2 co) {
    return fract(sin(dot(co.xy , vec2(12.9898, 78.233))) * 43758.5453);
}

float dots(vec2 coord)
{
    vec2 i = floor(coord.xy / vec2(50.0, 50.0));
    vec2 f = fract(coord.xy / vec2(50.0, 50.0));
    
    vec2 offset = vec2(
        rand(i),
        rand(i + vec2(1.0))
    );
    float d = distance(vec2(0.5, 0.5), f + offset * 0.3);
    float g = step(0.2, d);
    return g;
}
void main() {
    float g = dots(gl_FragCoord.xy);
    // g = min(g, dots(gl_FragCoord.xy + vec2(100.0, 125.0)));
    // g = min(g, dots(gl_FragCoord.xy + vec2(125.0, 15.0)));
    g = min(g, dots(gl_FragCoord.xy + vec2(125.0, 120.0)));
    
    gl_FragColor = vec4(g, g, g, 1.0);
}
