#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
   
    
    vec3 color;
    if (200.0 < gl_FragCoord.x &&
        200.0 < gl_FragCoord.y &&
        gl_FragCoord.x < 400.0 &&
        gl_FragCoord.y < 400.0)
    {
        color = vec3(1.0, 0.0, 0.0);
    } else {
        color = vec3(0.0, 0.0, 0.0);
    }
	gl_FragColor = vec4(color,1);
}
