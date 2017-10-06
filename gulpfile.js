var gulp = require('gulp');

// util
var tap = require('gulp-tap');
var changed = require('gulp-changed');
// serve
var browserSync = require('browser-sync').create();

// md/template
var wrap = require('gulp-wrap');
var frontMatter = require('gulp-front-matter');
var layout = require('gulp-layout');
var file_include = require('gulp-file-include');

// css + sass
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// webpack
var webpack = require('webpack-stream');

markdownToHTML = require('./build_src/markdown_builder');
gulp.task('markdown', function() {
    return gulp.src('content/**/*.md')
        .pipe(changed('docs'))
        .pipe(frontMatter())
        .pipe(tap(logFrontMatter))
        .pipe(file_include())
        .pipe(tap(markdownToHTML))
        // .pipe(wrap({ src: 'layouts/main.html' }))
        .pipe(layout((file) => file.frontMatter))
        .pipe(gulp.dest('docs'))
        .pipe(browserSync.stream());;
});

function logFrontMatter(file) {
    console.log(file.path, file.frontMatter);
}


gulp.task('copy_content', function() {
    return gulp.src('content/**/*.*')
        .pipe(gulp.dest('docs'));
});

gulp.task('vendor', function() {
    return gulp.src('vendor/**/*.*')
        .pipe(gulp.dest('docs/vendor'));
});

gulp.task('copy_js_lab', function() {
    return gulp.src(['js_lab/**/*.*'])
        .pipe(gulp.dest('docs/js_lab'))
        .pipe(browserSync.stream());
});


// gulp.task('src_copy', function () {
//     return gulp.src(['src/**/*.*', '!src/**/*.scss'])
//         .pipe(gulp.dest('docs/src'))
//         .pipe(browserSync.stream());
// });

// gulp.task('src_sass', function () {
//     return gulp.src('src/**/*.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass().on('error', sass.logError))
//         .pipe(sourcemaps.write())
//         .pipe(gulp.dest('docs/src'))
//         .pipe(browserSync.stream());
// });


const ExtractTextPlugin = require("extract-text-webpack-plugin");
gulp.task('src_webpack', function() {
    return gulp.src('src/entry.js')
        .pipe(webpack({
            watch: true,
            devtool: 'source-map',
            module: {
                rules: [{
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [{
                            loader: "css-loader"
                        }, {
                            loader: "sass-loader"
                        }]
                    })
                }]
            },
            plugins: [
                new ExtractTextPlugin("styles.css"),
            ],

            output: {
                path: __dirname + '/docs', // `dist` is the destination
                filename: 'bundle.js',
            },

        }))
        .pipe(gulp.dest('docs/src'))
        .pipe(browserSync.stream());
});

gulp.task('start_watch', function() {
    gulp.watch(['content/**/*.md', 'content/**/*.*', 'layouts/**/*.**'], ['markdown']);
    gulp.watch('vendor/**/*.*', ['vendor']);
    gulp.watch('js_lab/**/*.*', ['copy_js_lab']);
    gulp.watch('content/**/*.*', ['copy_content']);
    // gulp.watch('src/**/*.scss', ['src_sass']);//.on('change', browserSync.reload);
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./docs",
        },
        open: false
    }, function() {
        console.log("\n\nServer at http://localhost:3000/");
        // browserSync.reload();
    });

});


gulp.task('build', ['markdown', 'vendor', 'copy_js_lab', 'copy_content', 'src_webpack']);
gulp.task('watch', ['build', 'start_watch']);
gulp.task('default', ['build', 'serve', 'start_watch']);











// webpack rule for sass + extract-loader
// module: {
//     rules: [{
//         test: /\.scss$/,
//         use: [{
//             loader: "file-loader",
//             options: {name: 'styles.css'}
//         },
//         {
//             loader: "extract-loader" 
//         },
//         // {
//         //     loader: "style-loader"
//         // },
//         {
//             loader: "css-loader",
//             options: { sourceMap: true }
//         },
//         {
//             loader: "sass-loader",
//             options: {sourceMap: true}
//         }]
//     }],
// },