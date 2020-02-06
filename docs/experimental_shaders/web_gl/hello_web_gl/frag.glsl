precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

varying vec2 v_texcoord;

void main() {
    float d = distance(u_mouse / u_resolution, v_texcoord);
    float spacing = 1.0;
    d += u_time * 0.2;
    d = mod(d, spacing) / spacing;
    d = step(0.5, d);
    
    gl_FragColor = vec4(d, d, d, 1.0);
}