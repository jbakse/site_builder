#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;


void main() {
    //test
    gl_FragColor.r = step(20., mod(gl_FragCoord.x + u_time * 100., 50.));
    gl_FragColor.g = step(20., mod(gl_FragCoord.x + u_time * 111., 50.));
    gl_FragColor.b = step(20., mod(gl_FragCoord.x + u_time * 130., 50.));
    gl_FragColor.a = 1.;
}
