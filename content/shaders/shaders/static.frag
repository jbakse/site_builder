#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;


float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))*43758.5453123);
}
void main() {
    float r = random(gl_FragCoord.xy *.001 + u_time);
    float g = random(gl_FragCoord.xy *.001 + u_time + 10.0);
    float b = random(gl_FragCoord.xy *.001 + u_time + 20.0);


	gl_FragColor = vec4(r,g,b,1);
}
