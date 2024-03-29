precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_sampler;

varying vec2 v_texcoord;

void main() {
    
    vec4 noise = texture2D(u_sampler, v_texcoord + vec2(u_time * 0.1));
    vec4 color = vec4(1.0);
    vec2 uv = v_texcoord;
    
    noise -= 0.5;
    uv += noise.rg * 0.05;
    
    float d = distance(vec2(0.5), uv);
    float spacing = 0.2;
    d = mod(d, spacing) / spacing;
    d = step(0.5, d);
    color.rgb = vec3(d);
    
    gl_FragColor = color;
}
