# Todo

.cleanup `markdown_builder.js`
.properly style slideshow
.disable slideshow autoplay

.change compiled breakpoints to account for sidebar

rabbithole?.have sass build bootstrap with config

# Features

Frontmatter parsing
Layout/Template loading
Markdown parsing by markdown-it
TOC generation and scroll spying
Content -> Content includes.
Webpack builds modules with sass and javascript
Slideshow carousels with image and description support
Live code examples with JS Lab, supports p5, p5+addons, other libs

styling support for themeable components based of bootstrap `.callout .callout-alert`


# Features - Styles
- Callout
- Collout-side
- Headers
- Lists
- Sidebar Left
- Sidebar right
- Slideshow expand left-right
- yaml -> slide carousel


# Bugs
x.browser reload sometimes fires early. You need to save twice to see changes.
.markdown watcher and rebuild doesn't work when layouts change because the `changed` filter only rebuilds md files that have changed and doesn't check dependancies like layouts



## Refrences
[Markdown Editor in VS Code](
http://thisdavej.com/build-an-amazing-markdown-editor-using-visual-studio-code-and-pandoc/)

[NPM as Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)

[Build your own Markdown Flavour](http://www.broculos.net/2015/12/build-your-own-markdown-flavour-with.html#.WcVuXNOGMUE)

[local linking to a library npm package in dev](http://justjs.com/posts/npm-link-developing-your-own-npm-modules-without-tears)
[another take on npm link](https://medium.com/@the1mills/how-to-test-your-npm-module-without-publishing-it-every-5-minutes-1c4cb4b369be)


// layout options
// http://silvenon.com/simple-layouting-with-gulp/
// gulp-layout gulp-build
// http://www.broculos.net/2015/12/build-your-own-markdown-flavour-with.html#.WcQBdtOGMUE

// gulp layout "like a jekyll"
//https://github.com/macoshita/gulp-layout

//https://www.html5rocks.com/en/tutorials/speed/script-loading/

// https://github.com/toolness/p5.js-widget/issues/53