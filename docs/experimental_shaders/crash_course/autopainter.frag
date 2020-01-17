precision highp float;

uniform float u_time;
float rand(vec2 co) {
    return fract(sin(dot(co.xy , vec2(12.9898, 78.233))) * 43758.5453);
}

float circle(vec2 coord, vec2 loc, float radius, float blur) {
    return smoothstep(radius, radius + blur, distance(loc, coord));
    return 1.0;
}

void main() {
    float tick = floor(u_time);
    
    vec3 background_color = vec3(
        rand(tick + vec2(0.1, 0.0)),
        rand(tick + vec2(0.2, 0.0)),
        rand(tick + vec2(0.3, 0.0))
    );
    background_color = mix(background_color, vec3(0.3, 0.3, 0.3), 0.7);
    
    vec3 foreground_color = vec3(
        rand(tick + vec2(0.1, 0.1)),
        rand(tick + vec2(0.2, 0.1)),
        rand(tick + vec2(0.3, 0.1))
    );
    
    vec2 location = vec2(
        rand(tick + vec2(0.1, 0.2)),
        rand(tick + vec2(0.2, 0.2))
    ) * 600.0;
    
    float size = rand(tick + vec2(0.1, 0.3)) * 300.0 + 100.0;
    
    vec3 scene = background_color;
    scene = mix(foreground_color, scene, circle(gl_FragCoord.xy, location, size, 40.0));
    
    gl_FragColor = vec4(scene, 1.0);
}
