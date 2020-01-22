precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;

vec4 pattern(vec2 p) {
    p = mod(p * 10.0, 1.0);
    return vec4(p.x, p.y, 0.0, 1.0);
}

void main() {
    vec2 coord_N = gl_FragCoord.xy / u_resolution;
    coord_N.y /= u_resolution.x / u_resolution.y;
    
    vec2 mouse_N = u_mouse / u_resolution;
    mouse_N.y /= u_resolution.x / u_resolution.y;
    
    vec4 black = vec4(0.0, 0.0, 0.0, 1.0);
    
    float d = distance(mouse_N , coord_N);
    gl_FragColor = mix(pattern(coord_N), black, step(0.2, d));
}
