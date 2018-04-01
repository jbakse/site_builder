injectInterface();
const button = document.getElementById("submit");
button.addEventListener('click', buildTemplate);


function buildTemplate() {
    const noun1 = document.getElementById("noun1").value || "magic";
    const noun2 = document.getElementById("noun2").value || "spells";
    const noun3 = document.getElementById("noun3").value || "coven";
    const adverb1 = document.getElementById("adverb1").value || "wickedly";
    const verb1 = document.getElementById("verb1").value || "plot";
    const noun4 = document.getElementById("noun4").value || "cauldron";

    const amendment = `Congress shall make no law respecting
    an establishment of ${noun1}, or prohibiting
    the free exercise thereof; or abridging the
    freedom of ${noun2}, or of the ${noun3}; or the
    right of the people ${adverb1} to ${verb1}, and
    to petition the government for a ${noun4}.`

    const outputDiv = document.getElementById('output');

    outputDiv.textContent = amendment;
}


function injectInterface() {

    document.body.insertAdjacentHTML('beforeend', `
<style>
body {
    font-family: "Overpass Mono", sans-serif;
    
}
.input, .output {
    margin-bottom: 40px;
    
    
}
.input input {
    border: 1px solid black;
    padding: 5px;
    font-size: 18px;
    margin-bottom: 10px;
}


.input label {
    font-size: 12px;
    width: 150px;
    display: inline-block;
}

.input button {
    font-family: "Overpass Mono", sans-serif;
    font-size: 12px;
    background: white;
}
</style>
`);

    document.body.insertAdjacentHTML('beforeend', `
<div class="input">
    <div><label>abstract noun</label><input id="noun1"></div>
    <div><label>abstract noun</label><input id="noun2"></div>
    <div><label>collective noun</label><input id="noun3"></div>
    <div><label>singular noun</label><input id="noun4"></div>
    <div><label>adverb</label><input id="adverb1"></div>
    <div><label>verb</label><input id="verb1"></div>
    <div><label></label><button id="submit">submit</button></div>
</div>
<div id="output" class="output">
</div>
`);
}