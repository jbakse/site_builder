//////////////////////////////////////////////
// ?
const VS_SOURCE = `
    precision highp float;
    
    attribute vec4 aVertexPosition;
    
    void main(void) {
      gl_Position = aVertexPosition;
    }
`;

//////////////////////////////////////////////
// ?
const FS_SOURCE = `
    precision highp float;

    void main(void) {
      gl_FragColor = vec4(gl_FragCoord.x / 640.0, 0.0, 0.0, 1.0);
    }
`;

main();
function main() {
    console.log('Hello, WebGL!');

    //////////////////////////////////////////////
    // ?
    const canvas = document.querySelector('#glcanvas');
    const gl = canvas.getContext('webgl');


    //////////////////////////////////////////////
    // ?

    // ?
    const vertex_shader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertex_shader, VS_SOURCE);
    gl.compileShader(vertex_shader);

    // ?
    const fragment_shader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragment_shader, FS_SOURCE);
    gl.compileShader(fragment_shader);

    // ?
    const shader_program = gl.createProgram();
    gl.attachShader(shader_program, vertex_shader);
    gl.attachShader(shader_program, fragment_shader);
    gl.linkProgram(shader_program);


    //////////////////////////////////////////////
    // ?
    const vertex_position_location = gl.getAttribLocation(shader_program, 'aVertexPosition');


    //////////////////////////////////////////////
    // ?

    // ?
    const position_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);
    const positions = [
        1.0, 1.0, // ?
        -1.0, 1.0, // ?
        1.0, -1.0, // ?
        -1.0, -1.0, // ?
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    gl.vertexAttribPointer(vertex_position_location, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertex_position_location);


    //////////////////////////////////////////////
    // ?
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);


    //////////////////////////////////////////////
    // ?

    // ?
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // ?
    gl.useProgram(shader_program);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

}







// right top

//////////////////////////////////////////////
// compile/link the shader program

// draw the geometry with our shaders

//////////////////////////////////////////////
// fragment shader program

// clear the background

// compile fragment shader

// left top

//////////////////////////////////////////////
// configure gl

// right bottom

// link fragment and vertex shader

// left bottom

//////////////////////////////////////////////
// vertex shader program

//////////////////////////////////////////////
// draw

//////////////////////////////////////////////
// create the context

// compile vertex shader

//////////////////////////////////////////////
// query the shaders for attibute and uniform locations

//////////////////////////////////////////////
// buffer the vertex data

// vertex position data
