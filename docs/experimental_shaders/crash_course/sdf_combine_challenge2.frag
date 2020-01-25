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
    
    float circle_1_sdf = circle(coord_N - vec2(0.3, 0.3), 0.15);
    float circle_2_sdf = circle(coord_N - vec2(0.6, 0.6), 0.1);
    
    float d = min(circle_1_sdf, circle_2_sdf);
    
    float g = step(0.1, fract(d * 30.0));
    
    g = min(g, step(0.0, d));
    
    gl_FragColor = vec4(vec3(g), 1.0);
}
