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
    
    vec4 color1 = texture2D(u_sampler, uv - (1.0 / u_resolution));
    vec4 color2 = texture2D(u_sampler, uv + (1.0 / u_resolution));
    color2.rgb = vec3(1.0) - color2.rgb;
    
    gl_FragColor = (color1 + color2) * 0.5;
}