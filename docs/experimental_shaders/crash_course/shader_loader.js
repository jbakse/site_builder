/* eslint-disable no-restricted-syntax */


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadShaders() {

  const shaders = document.querySelectorAll('.glsl_editor');

  for (const shader of shaders) {
    const editor = new GlslEditor(shader, {
      canvas_size: 300,
      canvas_follow: true,
      canvas_float: 'right',
      theme: 'monokai',
      lineWrapping: true,
    });
    editor.open(shader.getAttribute('data'));
    // await sleep(100);
  }
}

loadShaders();
