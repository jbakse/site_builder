// stores the mouse position
let mouse_xy = [0, 0];

main();
async function main() {
    console.log('Hello, WebGL!');

    //////////////////////////////////////////////
    // get the canvas

    const canvas = document.querySelector('#glcanvas');

    //////////////////////////////////////////////
    // load shaders

    const vertex_shader_source = await fetch(canvas.dataset.vert).then(r => r.text());
    console.log(vertex_shader_source);

    const fragment_shader_source = await fetch(canvas.dataset.frag).then(r => r.text());
    console.log(fragment_shader_source);

    //////////////////////////////////////////////
    // create the context

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
    gl.shaderSource(vertex_shader, vertex_shader_source);
    gl.compileShader(vertex_shader);

    if (!gl.getShaderParameter(vertex_shader, gl.COMPILE_STATUS)) {
        console.log('Error in vertex shader: \n\n' + gl.getShaderInfoLog(vertex_shader));
        gl.deleteShader(vertex_shader);
        return null;
    }

    // compile fragment shader
    const fragment_shader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragment_shader, fragment_shader_source);
    gl.compileShader(fragment_shader);

    if (!gl.getShaderParameter(fragment_shader, gl.COMPILE_STATUS)) {
        console.log('Error in fragment shader: \n\n' + gl.getShaderInfoLog(fragment_shader));
        gl.deleteShader(fragment_shader);
        return null;
    }

    // link fragment and vertex shader
    const shader_program = gl.createProgram();
    gl.attachShader(shader_program, vertex_shader);
    gl.attachShader(shader_program, fragment_shader);
    gl.linkProgram(shader_program);

    if (!gl.getProgramParameter(shader_program, gl.LINK_STATUS)) {
        console.log('Error initializing shader program: \n\n' + gl.getProgramInfoLog(shader_program));
        return null;
    }




    //////////////////////////////////////////////
    // query the shaders for attibute and uniform "locations"
    const vertex_position_location = gl.getAttribLocation(shader_program, 'aVertexPosition');
    const vertex_uv_location = gl.getAttribLocation(shader_program, 'aVertexUV');
    const u_mouse_location = gl.getUniformLocation(shader_program, "u_mouse");
    const u_time_location = gl.getUniformLocation(shader_program, "u_time");
    const u_resolution_location = gl.getUniformLocation(shader_program, "u_resolution");

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
    const uv_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uv_buffer);
    const uvs = [
        1.0, 1.0, // right top
        0.0, 1.0, // left top
        1.0, 0.0, // right bottom
        0.0, 0.0, // left bottom
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW);
    gl.vertexAttribPointer(vertex_uv_location, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vertex_uv_location);


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
        gl.uniform2fv(u_resolution_location, [canvas.width, canvas.height]);
        gl.uniform1f(u_time_location, (Date.now() - start_time) * .001);

        // draw the geometry
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

}

