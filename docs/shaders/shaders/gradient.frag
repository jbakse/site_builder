#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 fragCoord_N = gl_FragCoord.xy / u_resolution;
    float r = fragCoord_N.x;
    float g = fragCoord_N.y;
	gl_FragColor = vec4(r,g,0,1);
}
