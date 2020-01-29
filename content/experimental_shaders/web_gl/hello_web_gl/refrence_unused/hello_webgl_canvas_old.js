console.log('Hello, WebGL!');

// adapted from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
// inlined functions
// removed error handling
// removed projection / matrix
// removed comments


// change the vertex positions
// add uv
// compare how frag_coord and uv react to channging vertex positions


//////////////////////////////////////////////
// The vertex shader program
const VS_SOURCE = `
    precision highp float;

    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    varying vec4 vColor;

    void main(void) {
      gl_Position = aVertexPosition;
      vColor = aVertexColor;
    }
  `;

//////////////////////////////////////////////
// The fragment shader program
const FS_SOURCE = `
    precision highp float;

    uniform vec2 u_mouse;
    uniform float u_time;

    varying vec4 vColor;

    void main(void) {
      float d = distance(u_mouse, gl_FragCoord.xy);
      d += u_time * 150.0;
      d = mod(d, 100.0);
      d = step(50.0, d);
      gl_FragColor = vec4(d, d, d, 1.0);
    }
  `;


main();

let mouse_xy = [0, 0];

function main() {

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
        mouse_xy = [x, 720 - y];
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

    // attach and link shader program
    const shader_program = gl.createProgram();
    gl.attachShader(shader_program, vertex_shader);
    gl.attachShader(shader_program, fragment_shader);
    gl.linkProgram(shader_program);

    //////////////////////////////////////////////
    // minimal error handling

    if (!gl.getShaderParameter(vertex_shader, gl.COMPILE_STATUS)) {
        console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(vertex_shader));
        gl.deleteShader(vertex_shader);
        return null;
    }

    if (!gl.getShaderParameter(fragment_shader, gl.COMPILE_STATUS)) {
        console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(fragment_shader));
        gl.deleteShader(fragment_shader);
        return null;
    }

    if (!gl.getProgramParameter(shader_program, gl.LINK_STATUS)) {
        console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shader_program));
        return null;
    }


    //////////////////////////////////////////////
    // get "locations" of attributes and uniforms
    const a_vertex_position_location = gl.getAttribLocation(shader_program, 'aVertexPosition');
    const a_vertex_color_location = gl.getAttribLocation(shader_program, 'aVertexColor');
    const u_mouse_location = gl.getUniformLocation(shader_program, "u_mouse");
    const u_time_location = gl.getUniformLocation(shader_program, "u_time");



    //////////////////////////////////////////////
    // buffer the data

    // store the vertex positions
    const position_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);
    const positions = [
        1.0, 1.0, // right top
        -1.0, 1.0, // left top
        1.0, -1.0, // right bottom
        -1.0, -1.0, // left bottom
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // explain vertex data format
    gl.vertexAttribPointer(a_vertex_position_location, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_vertex_position_location);


    // store the vertex colors
    const color_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    const colors = [
        1.0, 1.0, 1.0, 1.0, // white
        1.0, 0.0, 0.0, 1.0, // red
        0.0, 1.0, 0.0, 1.0, // green
        0.0, 0.0, 1.0, 1.0, // blue
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    // explain vertex color format
    gl.vertexAttribPointer(a_vertex_color_location, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_vertex_color_location);



    //////////////////////////////////////////////
    // configure gl

    // set up depth testing
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);


    // clear the background
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    //////////////////////////////////////////////
    // set up animation loop
    let start_time = Date.now();
    function render() {
        gl.useProgram(shader_program);
        gl.uniform2fv(u_mouse_location, mouse_xy);
        gl.uniform1f(u_time_location, (Date.now() - start_time) * .001);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);
}

