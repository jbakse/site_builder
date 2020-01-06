
# JS Lab

Javascript Example Editor

Uses ace editor to provide a code editor and displays results in preview iframe.


## Libraries

JS Lab provides method for including libraries (local or from CDN) using require comments following this format

```
// require http://cdn.com/path/lib.js
```

Libraries are loaded in the order provided, and the script is run after libraries are all loaded.


## P5 Bootstrapping

p5.js looks for defined `setup()` and `draw()` functions and bootstraps itself. Since JS Lab loads p5 before injecting the code example, p5 needs to be manually bootstrapped. JS Lab injects a snippet to do so.

This works for the examples I'm making, with a caveat. p5 calls such as `random()` can't be called when declaring global variables outside `setup` etc. as p5 won't be bootstrapped yet.

```
let i = random(10); // error
```

```
let i;
function setup() {
    i = random(10); // okay
}
```

See: https://github.com/toolness/p5.js-widget/issues/53


## DOM Console

JS Lab provides a basic DOM console to show `console.log()`s and errors on the webpage instead of in the console. This is helpful embedded examples.

## File Overview

- `js_lab.html` HTML for the Editor, embeds `js_lab_view.html`
- `js_lab_view.html` HTML for the Preview, is emebedded in `js_lab.html`
- `js_lab.js` Javascript for `js_lab.html`
- `styles.css` CSS for `js_lab.html`
- `example.css` Default source to show in the editor, if no content is provided


## Todo

- [x] better factoring/orginization
- [x] Report errors in DOM console
- [x] Reload on "save" keypress
- [x] Make auto reload optional (hardcoded settings in js_lab.js)
- [ ] Auto run on scroll into view
- [ ] Catch runaway infinite loops



## References

http://cwestblog.com/2016/03/16/javascript-detecting-infinite-loops/

https://codepen.io/quezo/post/stopping-infinite-loops

https://github.com/asvd/jailed

https://github.com/bcoe/sandcastle

https://sns.cs.princeton.edu/2012/04/javascript-in-javascript-js-js-sandboxing-third-party-scripts/