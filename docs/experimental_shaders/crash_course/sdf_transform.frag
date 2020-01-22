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

void main() {
    vec2 coord_N = gl_FragCoord.xy / u_resolution;
    coord_N.y /= u_resolution.x / u_resolution.y;
    coord_N -= vec2(0.5, 0.5);
    coord_N = rotate(coord_N, u_time);
    coord_N -= vec2(0.0, 0.3);
    coord_N = rotate(coord_N, u_time * -5.0);
    coord_N *= 1.0 + sin(u_time);
    
    float rect_sdf = rectangle(coord_N, vec2(0.1, 0.2));
    float gray = step(0.0, rect_sdf);
    gl_FragColor = vec4(vec3(gray), 1.0);
}
