precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_sampler;

varying vec2 v_texcoord;

vec2 rotate(vec2 p, float angle) {
    float sine = sin(angle);
    float cosine = cos(angle);
    return vec2(
        cosine * p.x + sine * p.y,
        cosine * p.y - sine * p.x
    );
}

void main() {
    vec2 uv = v_texcoord;
    uv.y = 1.0 - uv.y;
    
    vec4 color = texture2D(u_sampler, uv);
    
    // invert
    color.rgb = vec3(1.0) - color.rgb;
    
    // darken
    // color.rgb *= u_mouse.x / u_resolution.x;
    
    gl_FragColor = color;
}