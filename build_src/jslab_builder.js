let t = require('./template_util.js');

module.exports = function jslabBuilder(classes, ids, content) {

    let src = content.trim();
    content = t.trimLines(`
        <div class="js-lab">
        <iframe class="js-lab" src="/js_lab/js_lab.html?${src}">
        </iframe>
        </div>
        `);

    return [classes, ids, content];
}