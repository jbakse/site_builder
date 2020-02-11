precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_sampler;

varying vec2 v_texcoord;

void main() {
    
    vec4 normal_map = texture2D(u_sampler, v_texcoord) - 0.5;
    
    vec4 color = vec4(1.0);
    
    vec3 light_pos = vec3(0.0, 0.0, 0.1);
    light_pos.xy = (u_mouse / u_resolution); // * 2.0 - 1.0;
    light_pos.xy -= v_texcoord;
    light_pos = normalize(light_pos);
    
    float LdN = dot(light_pos, normalize(normal_map.xyz));
    LdN = max(LdN, 0.0);
    
    color.rgb = vec3(LdN);
    
    //mix(vec3(0.5, 0.5, 0.5), vec3(0.6, 0.6, 0.6), normal_map.aaa);
    
    gl_FragColor = color;
}
