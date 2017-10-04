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


yaml = require('js-yaml');

function higlightSyntax(str, lang) {
    // console.log(lang, highlight_js.getLanguage(lang));
    if (lang && highlight_js.getLanguage(lang)) {
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

let components = {
    slides: slides
}

let slidesCounter = 0;
function slides(classes, ids, content) {
    slidesCounter++;

    console.log("slides!!!!");
    classes.push("slides");
    let data = yaml.safeLoad(content);

    let slides = '';
    let active = 'active';
    data.forEach((slide)=>{
        slides += `
<div class="carousel-item ${active}">
<img class="d-block" src="${slide.image}" alt="${slide.title}">
<div class="carousel-caption">
${slide.comments}
</div>
</div>`
        active = '';
    })

    content = `
<div id="carousel-${slidesCounter}" class="carousel slide" data-ride="false">
  <div class="carousel-inner">
    ${slides}
  </div>
  <a class="carousel-control-prev" href="#carousel-${slidesCounter}" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-${slidesCounter}" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
`

    return [classes, ids, content];

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
    var match = /\n:::(.*?)\n([\s\S]*?)\n:::/g;
    console.log("\n\n\nregex");
   
    result = input.replace(match, function (match, selector, content) {
   
        // trim and split on spaces (collapse multiple spaces)
        parts = selector.trim().split(/ +/);
        
        
        // extract classes, ids, requested
        classes = [];
        ids = [];
        requested_components = [];

        parts.forEach((part)=> {
            if (part.startsWith(".")) {
                classes.push(part.substr(1));
            } else if (part.startsWith("#")) {
                ids.push(part.substr(1));
            } else {
                requested_components.push(part)
            }

        }, this);

        requested_components.forEach((request)=>{
            request_function = components[request];
            if (request_function) {
                [classes, ids, content] = request_function(classes, ids, content);
            }
        });

        
        
        // export
        classes = classes.join(" ");
        ids = ids.join(" ");
        
        
        return `
<div id="${ids}" class="${classes}">

${content}

</div>
        `;
    });
    return result;
}