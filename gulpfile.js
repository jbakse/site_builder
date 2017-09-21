var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var gulp_util = require('gulp-util');
var tap = require('gulp-tap');
var MarkdownIt = require('markdown-it');

var md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
});

var wrap = require('gulp-wrap');

gulp.task('markdown', function () {    
    return gulp.src('content/**/*.md')
    .pipe(tap(markdownToHtml))
    .pipe(wrap({ src: 'layouts/main.html' }))
    .pipe(gulp.dest('docs'))
    ;
});

function markdownToHtml(file) {
    console.log('markdownToHTML tap');

    var result = file.contents.toString();
    
    var match = /^:::(.*)$/mg;
    result = result.replace(match, function(match, p1) {
        if (p1) {
            return '<div class="warning">\n';
        } else {
            return "</div>\n";
        }
    });

    result = md.render(result);


    file.contents = new Buffer(result);
    file.path = gulp_util.replaceExtension(file.path, '.html');
    return;
}


gulp.task('watch', function() {
    gulp.watch('content/**/*.md', ['markdown']).on('change', browserSync.reload);
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./docs"
        }
    });

});

gulp.task('default', ['markdown', 'serve', 'watch']);

// layout options
// http://silvenon.com/simple-layouting-with-gulp/
// gulp-layout gulp-build
// http://www.broculos.net/2015/12/build-your-own-markdown-flavour-with.html#.WcQBdtOGMUE