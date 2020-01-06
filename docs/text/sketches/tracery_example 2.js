// require /text/tracery.min.js

const storyGrammar = {
    "story": ["First, #phrase#. Then, #phrase#. Finally, #phrase#, and #phrase#."],
    "phrase": ["#subject.a# #verb# #object.a#"],
    "subject": ["#noun#", "#adjective# #noun#"],
    "object": ["#noun#", "#adjective# #noun#", "#adjective# #noun# and #adverb.a# #adjective# #noun#"],
    "adverb": ["exceptionally", "somewhat"],
    "adjective": ["proud", "small", "forgetful", "handsome", "comical", "wild"],
    "noun": ["cat", "dog", "frog", "duck"],
    "verb": ["becomes friends with", "finds", "chases", "plots with"],
}


function main() {
    let grammar = tracery.createGrammar(storyGrammar);
    let story = grammar.flatten("#story#");

    const storyDiv = document.createElement('div');
    storyDiv.style = "font-size: 30px; margin: 10%; line-height: 1.5;";
    storyDiv.textContent = story;

    document.body.insertAdjacentElement("beforeend", storyDiv);
}


setTimeout(main, 10);