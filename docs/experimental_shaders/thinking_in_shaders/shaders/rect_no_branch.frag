#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
   
    float left = step(200.0, gl_FragCoord.x); 
    float top = step(200.0, gl_FragCoord.y);  
    float right = step(gl_FragCoord.x, 400.0);
    float bottom = step(gl_FragCoord.y, 400.0);  
    float inRect = left*top*right*bottom; 
    vec3 color = mix(vec3(0.0, 0.0, 0.0), vec3(1.0, 0.0, 0.0), inRect);

	gl_FragColor = vec4(color,1);
}
