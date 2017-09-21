var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var markdown_it = require('gulp-markdown-it');
var wrap = require('gulp-wrap');

gulp.task('markdown', function () {    
    return gulp.src('content/**/*.md')
    .pipe(markdown_it())
    .pipe(wrap({ src: 'layouts/main.html' }))
    .pipe(gulp.dest('docs'))
    ;
});


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

gulp.task('default', ['serve', 'watch']);

//layout options
//http://silvenon.com/simple-layouting-with-gulp/
//gulp-layout gulp-build