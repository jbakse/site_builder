var gulp_util = require('gulp-util');
var MarkdownIt = require('markdown-it');
var highlight_js = require('highlightjs');


var md = new MarkdownIt({
    html: true,
    xhtmlOut: false,
    breaks: false,
    langPrefix: 'language-',
    linkify: true,
    typographer: true,
    quotes: '“”‘’',
    highlight: higlightSyntax
});

md.use(require('markdown-it-deflist'));
md.use(require('markdown-it-anchor'), {
    permalink: false
});


md.renderer.rules.table_open = function (tokens, idx, options, env, self) {
    return '<table class="table table-responsive">\n';
};
md.renderer.rules.table_close = function (tokens, idx, options, env, self) {
    return '</table>\n';
};



function higlightSyntax(str, lang) {
    // console.log(lang, highlight_js.getLanguage(lang));
    if (lang && highlight_js.getLanguage(lang)) {
        console.log("try");
        try {
            return highlight_js.highlight(lang, str).value;
        } catch (__) { }
    }

    return ''; // use external default escaping
}


module.exports = function markdownToHtml(file) {
    var result = file.contents.toString();

    result = convertContainers(result);

    result = md.render(result);

    file.contents = new Buffer(result);
    file.path = gulp_util.replaceExtension(file.path, '.html');

    return;
}


/**
 * convertContainer(string)
 * 
 * Finds lines that look like
 * ::: .warning #e1
 * lorem
 * :::
 * 
 * Turns them into
 * <div id="e1" class="warning">
 * lorem
 * </div>
 */
function convertContainers(input) {
    var match = /^:::(.*)$/mg;
    result = input.replace(match, function (match, p1) {
        // trim and split on spaces (collapse multiple spaces)
        parts = p1.trim().split(/ +/);

        // extract classes and ids
        classes = [];
        ids = [];
        parts.forEach(function (part) {
            if (part.startsWith(".")) {
                classes.push(part.substr(1));
            }
            if (part.startsWith("#")) {
                ids.push(part.substr(1));
            }
        }, this);

        classes = classes.join(" ");
        ids = ids.join(" ");

        if (p1.trim()) {
            return `<div id="${ids}" class="${classes}">\n`;
        } else {
            return "</div>\n";
        }
    });
    return result;
}