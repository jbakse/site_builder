precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

float rectangleQuick(vec2 frag_coord, vec2 size) {
    vec2 componentDistance = abs(frag_coord) - size;
    return max(componentDistance.x, componentDistance.y);
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
    vec2 rect_coord = coord_N - vec2(0.5, 0.5);
    float rect_sdf = rectangle(rect_coord, vec2(0.1, 0.2));
    // float gray = step(0.0, rect_sdf);
    gl_FragColor = vec4(vec3(rect_sdf), 1.0);
}
