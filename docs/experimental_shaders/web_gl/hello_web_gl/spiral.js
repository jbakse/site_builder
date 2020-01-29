//////////////////////////////////////////////
// Vertex shader program
const VS_SOURCE = `
    precision highp float;

    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    varying vec4 vColor;

    void main(void) {
      vColor = aVertexColor;
      gl_Position = aVertexPosition;
    }
`;

//////////////////////////////////////////////
// Fragment shader program
const FS_SOURCE = `
    precision highp float;

    uniform vec2 u_mouse;
    uniform float u_time;

    varying vec4 vColor;

    void main(void) {
      vec2 center = u_mouse;

      vec2 v = normalize(gl_FragCoord.xy - center);
      float a = acos(dot(vec2(0.0, 1.0), v));
	  a = a / 6.28;
      if (gl_FragCoord.x < center.x){
          a = 1.0 - a;     
      }
      float d = distance(center, gl_FragCoord.xy);
      d = pow(d/100.0, 2.0) * 100.0;
      d += a*100.0;
      d += -u_time * 150.0;
      d = mod(d, 100.0);
      d = step(50.0, d);
	  

      gl_FragColor = vec4(vColor.rgb * d, 1.0);
    }
`;

// stores the mouse position
let mouse_xy = [0, 0];

main();
function main() {
    console.log('Hello, WebGL!');

    //////////////////////////////////////////////
    // create the context
    const canvas = document.querySelector('#glcanvas');
    const gl = canvas.getContext('webgl');


    //////////////////////////////////////////////
    // keep track of the mouse position
    canvas.addEventListener('mousemove', event => {
        let bounds = canvas.getBoundingClientRect();
        let x = event.clientX - bounds.left - canvas.clientLeft;
        let y = event.clientY - bounds.top - canvas.clientTop;
        mouse_xy = [x, bounds.height - y];
        // console.log("mouse_xy", mouse_xy);
    });

    //////////////////////////////////////////////
    // compile/link the shader program

    // compile vertex shader
    const vertex_shader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertex_shader, VS_SOURCE);
    gl.compileShader(vertex_shader);

    // compile fragment shader
    const fragment_shader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragment_shader, FS_SOURCE);
    gl.compileShader(fragment_shader);

    // link fragment and vertex shader
    const shader_program = gl.createProgram();
    gl.attachShader(shader_program, vertex_shader);
    gl.attachShader(shader_program, fragment_shader);
    gl.linkProgram(shader_program);


    //////////////////////////////////////////////
    // query the shaders for attibute and uniform "locations"
    const vertex_position_location = gl.getAttribLocation(shader_program, 'aVertexPosition');
    const vertex_color_location = gl.getAttribLocation(shader_program, 'aVertexColor');
    const u_mouse_location = gl.getUniformLocation(shader_program, "u_mouse");
    const u_time_location = gl.getUniformLocation(shader_program, "u_time");

    //////////////////////////////////////////////
    // buffer the vertex data

    // vertex position data
    const position_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);
    const positions = [
        1.0, 1.0, // right top
        -1.0, 1.0, // left top
        1.0, -1.0, // right bottom
        -1.0, -1.0, // left bottom
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    gl.vertexAttribPointer(vertex_position_location, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertex_position_location);


    // vertex color data
    const color_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    const colors = [
        1.0, 1.0, 1.0, 1.0, // white
        1.0, 0.0, 0.0, 1.0, // red
        0.0, 1.0, 0.0, 1.0, // green
        0.0, 0.0, 1.0, 1.0, // blue
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    gl.vertexAttribPointer(vertex_color_location, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertex_color_location);


    //////////////////////////////////////////////
    // configure gl
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);


    //////////////////////////////////////////////
    // draw

    // clear the background
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    //////////////////////////////////////////////
    // set up animation loop
    let start_time = Date.now();
    function render() {
        // activate our program
        gl.useProgram(shader_program);

        // update uniforms
        gl.uniform2fv(u_mouse_location, mouse_xy);
        gl.uniform1f(u_time_location, (Date.now() - start_time) * .001);

        // draw the geometry
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

}

