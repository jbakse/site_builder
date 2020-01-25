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

void main() {
    vec2 coord_N = gl_FragCoord.xy / u_resolution;
    coord_N.y /= u_resolution.x / u_resolution.y;
    vec2 rect_coord = coord_N;
    rect_coord -= vec2(0.5, 0.5);
    rect_coord = rotate(rect_coord, u_time);
    rect_coord -= vec2(0.0, 0.3);
    rect_coord = rotate(rect_coord, u_time * -5.0);
    rect_coord *= 1.0 + sin(u_time);
    
    float rect_sdf = rectangle(rect_coord, vec2(0.1, 0.2));
    float gray = step(0.0, rect_sdf);
    gl_FragColor = vec4(vec3(gray), 1.0);
}
