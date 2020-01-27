precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

float circle(vec2 frag_coord, float radius) {
    return length(frag_coord) - radius;
}

void main() {
    vec2 coord_N = gl_FragCoord.xy / u_resolution;
    coord_N.y /= u_resolution.x / u_resolution.y;
    
    vec2 circle_coord = coord_N - vec2(0.5, 0.5);
    float circle_sdf = circle(circle_coord, 0.3);
    
    // float gray = step(0.0, circle_sdf);
    
    gl_FragColor = vec4(vec3(circle_sdf), 1.0);
}
