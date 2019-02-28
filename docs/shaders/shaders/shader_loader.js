console.log('test');
const shaders = document.querySelectorAll('.glsl_editor');

console.log('a', shaders, shaders[0]);
for (const shader of shaders) {
  console.log('ss', shader);
}
for (let i = 0; i < 10; i++) {
  console.log('shader');
  const shader = shaders[i];
  console.log('shader', shader);
}
