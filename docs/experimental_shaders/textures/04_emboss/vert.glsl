precision highp float;

attribute vec4 aVertexPosition;
attribute vec2 aVertexUV;

varying vec2 v_texcoord;

void main(void) {
    v_texcoord = aVertexUV;
    gl_Position = aVertexPosition;
}