// require /text/tracery.min.js

const storyGrammar = {
  story: ['First, #phrase#. Then, #phrase#. Finally, #phrase#, and #phrase#.'],
  phrase: ['#subject.a# #verb# #object.a#'],
  subject: ['#noun#', '#adjective# #noun#'],
  object: ['#noun#', '#adjective# #noun#', '#adjective# #noun# and #adverb.a# #adjective# #noun#'],
  adjective: ['proud', 'small', 'forgetful', 'handsome', 'comical', 'wild'],
  noun: ['cat', 'dog', 'frog', 'duck'],
  verb: ['becomes friends with', 'finds', 'chases', 'plots with'],


  description: ['#face_sentence# #hair_sentence# #extra_sentence#', '#hair_sentence# #extra_sentence# #face_sentence#'],
  face_sentence: ['Their #face_adj_phrase# #face_noun# #face_action#'],
  hair_sentence: ['They have #hair_style# #hair_color# hair and a #feature#.'],
  extra_sentence: ['A #extra# draws your attention.', 'A #extra# draws your eye.', 'They have a #extra#.'],

  feature: ['#mouth#', '#eyes#', '#nose#', '#ears#', '#mouth# and #nose#', '#eyes# and #ears#', '#eyes# and #mouth#'],
  mouth: ['#feat_adj# mouth', '#feat_adj# pair of lips'],
  eyes: ['#feat_adj# pair of eyes'],
  nose: ['#feat_adj# nose'],
  ears: ['#feat_adj# pair of ears'],

  feat_adj: ['huge', 'dark', 'narrow', 'tiny', 'wide'],

  hair_style: ['long', 'short', 'messy', 'unwashed', 'oily', 'shiny', 'curly', 'straight'],
  hair_color: ['black', 'brown', 'brown', 'blonde', 'sandy', 'rusty', 'red', 'white', 'gray', 'silver', 'pink'],

  extra: ['#extra_adj# #extra_noun#'],
  extra_adj: ['simple', 'ugly', 'strange', 'golden', 'hidden'],
  extra_noun: ['necklace', 'tatoo', 'earring', 'freckle', 'piercing', 'tooth'],

  face_action: ['turns toward you.', 'twists into a sneer.', 'cracks a smile.', 'holds many secrets.', 'reveals little.', 'tightens.', 'comes into view.', 'emerges from the dark.'],
  face_adj_phrase: ['#modified_face_adj_quality# #face_adj_age#',
    '#face_adj_age #face_adj_shape#',
    '#modified_face_adj_quality# #face_adj_shape#',
    '#modified_face_adj_quality#',
    '#face_adj_age#',
    '#face_adj_shape#',
    '#modified_face_adj_quality# and #modified_face_adj_quality#'],
  modified_face_adj_quality: ['#adverb# #face_adj_quality#', '#face_adj_quality#', '#face_adj_quality#'],
  face_adj_quality: ['clean', 'dirty', 'tight', 'weathered', 'carefree', 'bright', 'brooding', 'severe', 'dark', 'sour', 'handsome', 'radiant'],
  face_adj_age: ['young', 'youthful', 'middle-aged', 'old', 'aging'],
  face_adj_shape: ['round', 'narrow', 'small', 'square'],
  face_noun: ['face', 'face', 'face', 'face', 'face', 'countenance', 'visage'],

  adverb: ['exceptionally', 'somewhat'],
};


function main() {
  const grammar = tracery.createGrammar(storyGrammar);
  const story = grammar.flatten('#description#');

  const storyDiv = document.createElement('div');
  storyDiv.style = 'font-size: 30px; margin: 10%; line-height: 1.5;';
  storyDiv.textContent = story;

  document.body.insertAdjacentElement('beforeend', storyDiv);
}


setTimeout(main, 10);
