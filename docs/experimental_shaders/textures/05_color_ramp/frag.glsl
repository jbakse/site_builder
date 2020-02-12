precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_sampler;

varying vec2 v_texcoord;

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
    
    float circle_1_sdf = circle(coord_N - vec2(0.3, 0.3), 0.01);
    float circle_2_sdf = circle(coord_N - vec2(0.6, 0.6), 0.15);
    
    float d = circle_1_sdf * circle_2_sdf;
    d += 0.05;
    d *= 4.0;
    d = clamp(d, 0.01, 0.99);
    
    // float g = step(0.1, fract(d * 30.0));
    // g = min(g, step(0.0, d));
    
    vec4 color = texture2D(u_sampler, vec2(d, u_mouse.x / u_resolution.x));
    
    gl_FragColor = color;
}
