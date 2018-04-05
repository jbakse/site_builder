// require /text/tracery.min.js

const storyGrammar = {
    'top': ['#div#'],
    'div': ['<div style="border: #borderSize# #borderType# #borderColor#;  color: #borderColor#; text-align: center; text-transform: uppercase; font-family: sans-serif; margin: 10px;">#content#</div>'],
    'content': ['#div#', '#div# #div#', '#word#', '#word#'],
    'borderSize': ['1px', '4px', '10px'],
    'borderType': ['solid', 'dashed', 'dotted'],
    'borderColor': ['red', 'green', 'blue'],
    'word': ['<span style="font-size: 30px">#adj# #animal##char#</span>'],
    'adj': ['angry', 'happy', 'major', 'minor', 'speedy', 'wrathful'],
    'animal': ['cat', 'mouse'],
    'char': ['!', '?']
}


function main() {
    let grammar = tracery.createGrammar(storyGrammar);
    let story = grammar.flatten('#top#');

    const storyDiv = document.createElement('div');
    storyDiv.innerHTML = story;

    document.body.insertAdjacentElement('beforeend', storyDiv);
}


setTimeout(main, 10);

