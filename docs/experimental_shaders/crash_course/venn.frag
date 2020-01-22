precision highp float;

uniform vec2 u_resolution;

void main() {
    vec2 coord_N = gl_FragCoord.xy / u_resolution;
    coord_N.y /= u_resolution.x / u_resolution.y;
    
    float d = distance(vec2(0.4, 0.5), coord_N);
    float d2 = distance(vec2(0.6, 0.5), coord_N);
    vec4 out_color = vec4(0.0, 0.0, 0.0, 1.0);
    out_color.rg = vec2(step(d, 0.2));
    out_color.gb = vec2(step(d2, 0.2));
    gl_FragColor = out_color;
}
