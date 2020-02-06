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
    vec4 blur = vec4(0.0);
    
    // horizontal box blur
    blur += texture2D(u_sampler, uv - (2.0 / u_resolution)) * 0.2;
    blur += texture2D(u_sampler, uv - (1.0 / u_resolution)) * 0.2;
    blur += texture2D(u_sampler, uv) * 0.2;
    blur += texture2D(u_sampler, uv + (1.0 / u_resolution)) * 0.2;
    blur += texture2D(u_sampler, uv + (2.0 / u_resolution)) * 0.2;
    
    // horizontal gaussian-ish blur
    // blur += texture2D(u_sampler, uv - (2.0 / u_resolution)) * 0.1;
    // blur += texture2D(u_sampler, uv - (1.0 / u_resolution)) * 0.2;
    // blur += texture2D(u_sampler, uv) * 0.4;
    // blur += texture2D(u_sampler, uv + (1.0 / u_resolution)) * 0.2;
    // blur += texture2D(u_sampler, uv + (2.0 / u_resolution)) * 0.1;
    
    gl_FragColor = mix(color, blur, step(0.5, uv.x));
}