let t = require('./template_util.js');

module.exports = function jsShowBuilder(classes, ids, content) {

    let src = content.trim();
    content = t.trimLines(`
        <div class="js-show">
        <iframe class="js-show" src="/js_lab/js_show.html?${src}">
        </iframe>
        </div>
        `);

    return [classes, ids, content];
}