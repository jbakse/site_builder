var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var tap = require('gulp-tap');
var wrap = require('gulp-wrap');

markdownToHTML = require('./markdown_builder');

gulp.task('markdown', function () {
    return gulp.src('content/**/*.md')
        .pipe(tap(markdownToHTML))
        .pipe(wrap({ src: 'layouts/main.html' }))
        .pipe(gulp.dest('docs'))
        .pipe(browserSync.stream());
    ;
});

gulp.task('vendor', function () {
    return gulp.src('vendor/**/*.*')
        .pipe(gulp.dest('docs/vendor'));
});

gulp.task('watch', function () {
    gulp.watch(['content/**/*.md', 'layouts/**/*.html'], ['markdown']);
    gulp.watch('vendor/**/*.*', ['vendor']).on('change', browserSync.reload);
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./docs",
        },
        open: false
    }, function () {
        console.log("\n\nServer at http://localhost:3000/");
        browserSync.reload();
    });

});


gulp.task('build', ['markdown', 'vendor']);
gulp.task('rebuild', ['build', 'watch']);
gulp.task('default', ['build', 'serve', 'watch']);
