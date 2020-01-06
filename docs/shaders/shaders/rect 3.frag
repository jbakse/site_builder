#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 fragCoord_N = gl_FragCoord.xy / u_resolution;
    fragCoord_N.y = 1.0 - fragCoord_N.y;

    float left = step(0.125, fragCoord_N.x); 
    float top = step(0.125, fragCoord_N.y);  
    float right = step(fragCoord_N.x, 0.875);
    float bottom = step(fragCoord_N.y, .5);  
    float inRect = left*top*right*bottom; 
    vec3 color = mix(vec3(.4, .4, .4), vec3(1,0,0), inRect);

	gl_FragColor = vec4(color,1);
}
