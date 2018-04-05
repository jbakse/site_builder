var roster = [ "Sachi", "Amber", "Talia", "Dorothy", "Sanie", "Enayet", "Jonathan", "Kim", "Jennifer", "Jane", "Gabriel", "Bateel", "Danielle" ];

roster = _.shuffle(roster);
roster.push("Justin");

// initialize the output
var output = "";

// walk the array stepping 2 at a time
for (var i = 0; i < roster.length; i += 2) {
    // append a line of output
    output += roster[i] + " and " + roster[i+1] + "</br>";
}

// create a "div" to hold the output.
var content_div = document.createElement("div");
content_div.innerHTML = output;

// add a little style
content_div.style.fontSize = "35px";

// find the body and append insert the div
var body = document.getElementsByTagName("body")[0];
body.appendChild(content_div);
