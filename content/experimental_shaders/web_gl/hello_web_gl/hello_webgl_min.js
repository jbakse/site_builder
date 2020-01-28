console.log('Hello, WebGL!');

// adapted from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL
// inlined functions
// removed error handling
// removed projection / matrix
// removed comments


// add animation loop
// remove u_color
// add u_resolution
// add u_mouse
// add u_time

// change the vertex positions
// add uv
// compare how frag_coord and uv react to channging vertex positions


//////////////////////////////////////////////
// Vertex shader program
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
// Fragment shader program
const FS_SOURCE = `
    precision highp float;
    varying vec4 vColor;

    void main(void) {
      gl_FragColor = vColor;
    }
  `;


main();


function main() {

    //////////////////////////////////////////////
    // create the contexte
    const canvas = document.querySelector('#glcanvas');
    const gl = canvas.getContext('webgl');


    //////////////////////////////////////////////
    // compile/link the shader program
    const vertex_shader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertex_shader, VS_SOURCE);
    gl.compileShader(vertex_shader);

    const fragment_shader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragment_shader, FS_SOURCE);
    gl.compileShader(fragment_shader);

    const shader_program = gl.createProgram();
    gl.attachShader(shader_program, vertex_shader);
    gl.attachShader(shader_program, fragment_shader);
    gl.linkProgram(shader_program);

    const vertex_position_location = gl.getAttribLocation(shader_program, 'aVertexPosition');
    const vertex_color_location = gl.getAttribLocation(shader_program, 'aVertexColor');


    //////////////////////////////////////////////
    // buffer the data
    const position_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);
    const positions = [
        1.0, 1.0, // right top
        -1.0, 1.0, // left top
        1.0, -1.0, // right bottom
        -1.0, -1.0, // left bottom
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const color_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    const colors = [
        1.0, 1.0, 1.0, 1.0, // white
        1.0, 0.0, 0.0, 1.0, // red
        0.0, 1.0, 0.0, 1.0, // green
        0.0, 0.0, 1.0, 1.0, // blue
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);


    //////////////////////////////////////////////
    // configure gl

    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);





    gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);
    gl.vertexAttribPointer(
        vertex_position_location,
        2, // components
        gl.FLOAT, // type
        false, // normalize
        0, // stride (tightly packed)
        0, // offset
    );
    gl.enableVertexAttribArray(vertex_position_location);

    gl.bindBuffer(gl.ARRAY_BUFFER, color_buffer);
    gl.vertexAttribPointer(
        vertex_color_location,
        4,
        gl.FLOAT,
        false,
        0,
        0,
    );
    gl.enableVertexAttribArray(vertex_color_location);


    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.useProgram(shader_program);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);



}

