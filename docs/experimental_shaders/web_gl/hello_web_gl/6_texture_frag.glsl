precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_sampler; // http://127.0.0.1:5500/content/experimental_shaders/web_gl/hello_web_gl/textures/pear.jpg

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
    uv.y = uv.y * u_resolution.y / u_resolution.x;
    uv.y = 1.0 - uv.y;
    
    uv -= 0.5;
    uv = rotate(uv, u_time * 0.1);
    uv *= (u_mouse.x / u_resolution.x) * 10.0 + 0.1;
    uv += 0.5;
    
    gl_FragColor = texture2D(u_sampler, uv);
}