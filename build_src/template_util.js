exports.trimLines = function(text) {
    let lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].trim();
    }
    text = lines.join("\n");
    return text;
}