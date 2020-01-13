/* eslint-disable no-restricted-syntax */
console.log('test');
const shaders = document.querySelectorAll('.glsl_editor');

for (const shader of shaders) {
  const editor = new GlslEditor(shader, {
    canvas_size: 300,
    tooltips: false,
    canvas_follow: true,
    canvas_float: 'right',
  });
  editor.open(shader.getAttribute('data'));

}
