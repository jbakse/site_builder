precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

float hill_mask(vec2 coord) {
    float hill1 = sin(coord.x * 1.1) * 0.20;
    float hill2 = sin(coord.x * 15.0) * 0.05;
    float hill3 = sin(coord.x * 21.1) * 0.02;
    float hill_mask = step(coord.y, 0.3 + hill1 + hill2 + hill3);
    return hill_mask;
}

float sun_mask(vec2 coord) {
    float d = distance(vec2(0.5, 0.5), coord);
    float sun_mask = step(0.2, d);
    return 1.0 - sun_mask;
}

void main() {
    // boilerplate get normalized coord
    vec2 coord_N = gl_FragCoord.xy / u_resolution;
    coord_N.y /= u_resolution.x / u_resolution.y;
    
    // calculate sky
    vec3 sky = mix(vec3(0.7, 0.7, 1.0), vec3(0.0, 0.2, 1.0), coord_N.y);
    
    // start scene
    vec3 scene = sky;
    
    // composite sun
    vec3 sun_yellow = vec3(1.0, 1.0, 0.0);
    scene = mix(scene, sun_yellow, sun_mask(coord_N + vec2(u_time * 0.04, 0.0)));
    
    // composite hills
    vec3 hill_green = vec3(0.0, 0.9, 0.0);
    scene = mix(scene, hill_green, hill_mask(coord_N + vec2(u_time, 0.0)));
    
    // add alpha to scene color, return to pipeline
    gl_FragColor = vec4(scene, 1.0);
}

