#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 fragCoord_N = gl_FragCoord.xy / u_resolution;
    fragCoord_N.y = 1.0 - fragCoord_N.y;
    
    vec3 color = vec3(.4, .4, .4);
    if (0.125 < fragCoord_N.x &&
        0.125 < fragCoord_N.y &&
        fragCoord_N.x < 0.875 &&
        fragCoord_N.y < .5)
    {
        color = vec3(1.0, 0.0, 0.0);
    }
	gl_FragColor = vec4(color,1);
}
