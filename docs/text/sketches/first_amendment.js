injectInterface();
const submitButton = document.getElementById("submit");
submitButton.addEventListener('click', buildTemplate);
const resetButton = document.getElementById("reset");
resetButton.addEventListener('click', reset);


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
    const inputDiv = document.getElementById('input');

    inputDiv.classList.add("hidden");
    outputDiv.classList.remove("hidden");

    const messageDiv = document.getElementById('message');
    messageDiv.innerText = amendment;
}

function reset() {
    const outputDiv = document.getElementById('output');
    const inputDiv = document.getElementById('input');

    inputDiv.classList.remove("hidden");
    outputDiv.classList.add("hidden");
}


function injectInterface() {

    document.body.insertAdjacentHTML('beforeend', `
<style>
body {
    font-family: "Overpass Mono", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#input,
#output
{
    font-size: 22px;
}

#output
{
    width: 600px;
}

#message {
    margin-bottom: 30px;
}
#input input {
    border: 1px solid black;
    padding: 5px;
    font-size: 18px;
    margin-bottom: 10px;
    width: 250px;
}

#input label {
    font-size: 12px;
    width: 150px;
    display: inline-block;
}

button {
    font-family: "Overpass Mono", sans-serif;
    font-size: 12px;
    background: white;
}

.hidden {
   display: none;
}
</style>
`);

    document.body.insertAdjacentHTML('beforeend', `
<div id="input">
    <div><label>abstract noun</label><input id="noun1"></div>
    <div><label>abstract noun</label><input id="noun2"></div>
    <div><label>collective noun</label><input id="noun3"></div>
    <div><label>singular noun</label><input id="noun4"></div>
    <div><label>adverb</label><input id="adverb1"></div>
    <div><label>verb</label><input id="verb1"></div>
    <div><label></label><button id="submit">submit</button></div>
</div>
<div id="output" class="hidden">
    <div id="message"></div>
    <button id="reset">reset</button>
</div>
`);
}