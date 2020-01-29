precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

vec2 rotate(vec2 p, float angle) {
    float sine = sin(angle);
    float cosine = cos(angle);
    return vec2(
        cosine * p.x + sine * p.y,
        cosine * p.y - sine * p.x
    );
}

float rectangle(vec2 frag_coord, vec2 size) {
    vec2 componentDistance = abs(frag_coord) - size;
    float outside = length(max(componentDistance, 0.0));
    float inside = min(max(componentDistance.x, componentDistance.y), 0.0);
    return outside + inside;
}

float circle(vec2 frag_coord, float radius) {
    return length(frag_coord) - radius;
}

float rand(vec2 co) {
    return fract(sin(dot(co.xy , vec2(12.9898, 78.233))) * 43758.5453);
}
vec3 card_design(vec2 coord) {
    
    coord.x *= 2.0;
    
    coord = rotate(coord, 3.14 * 0.25);
    vec3 background = mix(
        vec3(0.8, 0.8, 1.0),
        vec3(0.2, 0.2, 1.0),
        distance(coord, vec2(0.0))
    );
    
    vec2 i = floor(coord * 4.0);
    vec2 f = fract(coord * 4.0);
    
    vec2 mark_coord = f;
    mark_coord -= 0.5;
    float mark_sdf = rectangle(mark_coord, vec2(0.25));
    float mark_mask = step(0.1, mark_sdf);
    
    return mix(background, vec3(0.0, 0.0, 0.5), 1.0 - mark_mask);
}

void main() {
    vec2 coord_N = gl_FragCoord.xy / u_resolution;
    coord_N.y /= u_resolution.x / u_resolution.y;
    
    vec2 i = floor(coord_N * 4.0);
    vec2 f = fract(coord_N * 4.0);
    
    float card_speed = rand(i) + 1.0;
    vec2 card_coord = f;
    card_coord -= 0.5;
    card_coord = rotate(card_coord, sin(u_time * 3.0 * card_speed) * 0.1);
    
    float card_sdf = rectangle(card_coord, vec2(0.25));
    float card_mask = step(0.1, card_sdf);
    float card_border = step(0.1, card_sdf) - step(0.15, card_sdf);
    
    vec3 color = vec3(0.5);
    color = mix(card_design(card_coord), color, card_mask);
    color = mix(vec3(1.0, 1.0, 1.0), color, 1.0 - card_border);
    
    gl_FragColor = vec4(color, 1.0);
    
}
