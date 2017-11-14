let gulp_util = require('gulp-util');
let MarkdownIt = require('markdown-it');
let highlight_js = require('highlightjs');

let t = require('./template_util.js');




// components {}
// registry of component plugins
// key should be the name of the component used in markdown
// value should be the function that will build the component

let components = {
    "slides": require('./slides_builder'),
    "js-lab": require('./jslab_builder'),
}

// configure MarkdownIt
let md = new MarkdownIt({
    html: true,
    xhtmlOut: false,
    breaks: false,
    langPrefix: 'language-',
    linkify: true,
    typographer: true,
    quotes: '“”‘’',
    highlight: higlightSyntax
});

// include MarkdownIt extensions
md.use(require('markdown-it-deflist'));
md.use(require('markdown-it-anchor'), {
    permalink: false
});
md.use(require('markdown-it-classy'));


// customize MarkdownIt markup
md.renderer.rules.table_open = function(tokens, idx, options, env, self) {
    self;
    return '<table class="table table-responsive">\n';
};
md.renderer.rules.table_close = function(tokens, idx, options, env, self) {
    self;
    return '</table>\n';
};

// syntax highlighter
function higlightSyntax(str, lang) {
    if (lang && highlight_js.getLanguage(lang)) {
        try {
            return highlight_js.highlight(lang, str).value;
        } catch (__) {}
    }

    // return '' to use external default escaping
    return '';
}


// process markdown -> html
module.exports = function markdownToHtml(file) {
    try {

        // get the file contents
        let result = file.contents.toString();

        // process them
        result = buildComponents(result);
        result = md.render(result);

        // update the file object
        file.contents = new Buffer(result);
        file.path = gulp_util.replaceExtension(file.path, '.html');

        return;

    } catch (error) {
        console.error("Error in markdownToHtml", error);
    }
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
function buildComponents(input) {

    let component_regex = /\n:::(.*?)\n([\s\S]*?)\n:::/g;
    let result = input.replace(component_regex, buildComponent);
    return result;

}

function buildComponent(match, selector, content) {

    // trim and split on spaces (collapse multiple spaces)
    let selector_parts = selector.trim().split(/ +/);


    // extract classes, ids, requested components
    let classes = [];
    let ids = [];
    let requested_components = [];

    selector_parts.forEach((part) => {
        if (part.startsWith(".")) {
            classes.push(part.substr(1));
        } else if (part.startsWith("#")) {
            ids.push(part.substr(1));
        } else {
            requested_components.push(part)
        }

    }, this);


    // process requested components
    requested_components.forEach((request) => {

        let f = components[request];

        if (f) {
            [classes, ids, content] = f(classes, ids, content);
        }
    });



    // export
    classes = classes.join(" ");
    ids = ids.join(" ");

    return t.trimLines(`
<div id="${ids}" class="${classes}">
\n${content}\n
</div>`);
}