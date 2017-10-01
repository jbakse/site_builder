var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var tap = require('gulp-tap');
var wrap = require('gulp-wrap');
var frontMatter = require('gulp-front-matter');
var layout = require('gulp-layout');
var fileinclude = require('gulp-file-include');

markdownToHTML = require('./build_src/markdown_builder');

gulp.task('markdown', function () {
    return gulp.src('content/**/*.md')
        .pipe(frontMatter())
        .pipe(tap(logFrontMatter))
        .pipe(fileinclude())
        .pipe(tap(markdownToHTML))
        // .pipe(wrap({ src: 'layouts/main.html' }))
        .pipe(layout((file) => file.frontMatter))
        .pipe(gulp.dest('docs'))
        .pipe(browserSync.stream());
    ;
});

function logFrontMatter(file) {
    console.log(file.path, file.frontMatter);
}
gulp.task('vendor', function () {
    return gulp.src('vendor/**/*.*')
        .pipe(gulp.dest('docs/vendor'));
});

gulp.task('src', function () {
    return gulp.src('src/**/*.*')
        .pipe(gulp.dest('docs/src'))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch(['content/**/*.md', 'layouts/**/*.**'], ['markdown']);
    gulp.watch('vendor/**/*.*', ['vendor']);//.on('change', browserSync.reload);
    gulp.watch('src/**/*.*', ['src']);//.on('change', browserSync.reload);
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./docs",
        },
        open: false
    }, function () {
        console.log("\n\nServer at http://localhost:3000/");
        // browserSync.reload();
    });

});


gulp.task('build', ['markdown', 'vendor', 'src']);
gulp.task('rebuild', ['build', 'watch']);
gulp.task('default', ['build', 'serve', 'watch']);
