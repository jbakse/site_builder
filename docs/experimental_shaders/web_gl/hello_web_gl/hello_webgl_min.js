//////////////////////////////////////////////
// Vertex shader program
const VS_SOURCE = `
    precision highp float;
    
    attribute vec4 aVertexPosition;
    
    void main(void) {
      gl_Position = aVertexPosition;
    }
`;

//////////////////////////////////////////////
// Fragment shader program
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
    // create the context
    const canvas = document.querySelector('#glcanvas');
    const gl = canvas.getContext('webgl');


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
    // query the shaders for attibute and uniform locations
    const vertex_position_location = gl.getAttribLocation(shader_program, 'aVertexPosition');


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

    // draw the geometry with our shaders
    gl.useProgram(shader_program);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

}

