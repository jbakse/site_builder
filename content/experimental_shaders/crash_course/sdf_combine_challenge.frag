precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

vec2 rotate(vec2 coord, float angle) {
    float sine = sin(angle);
    float cosine = cos(angle);
    return vec2(
        cosine * coord.x + sine * coord.y,
        cosine * coord.y - sine * coord.x
    );
}

float rectangle(vec2 coord, vec2 radius) {
    vec2 componentDistance = abs(coord) - radius;
    float outside = length(max(componentDistance, 0.0));
    float inside = min(max(componentDistance.x, componentDistance.y), 0.0);
    return outside + inside;
}

float circle(vec2 coord, float radius) {
    return length(coord) - radius;
}

float roundTo(float n, float d) {
    return floor(n / d) * d;
}

void main() {
    vec2 coord_N = gl_FragCoord.xy / u_resolution;
    coord_N.y /= u_resolution.x / u_resolution.y;
    
    vec2 rect_transform = coord_N;
    rect_transform -= vec2(0.5, 0.4);
    float rect_sdf = rectangle(rect_transform, vec2(0.12, 0.16));
    
    float circle_sdf = circle(coord_N - vec2(0.5, 0.63), 0.1);
    
    float combined_sdf = min(rect_sdf, circle_sdf);
    
    float rect2_sdf = rectangle(coord_N - vec2(0.5, 0.35), vec2(0.08, 0.16));
    combined_sdf = min(rect2_sdf, combined_sdf);
    
    // float combined_sdf = min(rect_sdf, circle_sdf);
    float gray = step(0.0, combined_sdf);
    
    gl_FragColor = vec4(vec3(gray), 1.0);
}
