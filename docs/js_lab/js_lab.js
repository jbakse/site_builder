//////////////////////////////////////////
/// Lab

let lab = {};

lab.settings = {
    autorefresh: false,
};

// returns a debounced version of the function that waits _ms_ before firing
// "eats" multiple quick calls at once, firing just the last one
// adapted from https://john-dugan.com/javascript-debounce/
lab.debounce = function(func, ms) {
    let timeout;
    ms = ms || 200;

    return function() {
        let context = this;
        let args = arguments;

        let later = function() {
            timeout = null;
            func.apply(context, args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, ms);
    };
};


lab.main = function main() {

    // set up ace editor
    let editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow");
    editor.getSession().setMode("ace/mode/javascript");
    editor.$blockScrolling = Infinity;

    editor.commands.addCommand({
        name: "preview",
        exec: function PreviewCommand() {
            lab.inject();
        },
        bindKey: {
            mac: "cmd-s",
            win: "ctrl-s"
        }
    })


    // pull script name from url get string
    let script_name = window.location.search.substr(1) || "example.js";

    // load content of script, inject into editor
    let jqxhr = $.ajax({
        url: script_name,
        success: function(source) {
            editor.setValue(source);
            editor.gotoLine(1);
        },
        dataType: "text"
    });

    // install iframe:onload listener that injects new code into preview after it is reloaded by lab.inject
    $('#preview').on('load', function() {

        let bootstrap = `\nif (typeof p5 !== 'undefined') {new p5();}`;
        let source = editor.getValue();
        let frame = $('#preview')[0];
        if (frame.contentWindow.lab_view) {
            // regex matches "// require (url)"
            let require_regex = /^\/\/ ?require (.*?)$/gm;

            // collect requested libs
            let lib_hrefs = [];
            while (match_info = require_regex.exec(source)) {
                lib_hrefs.push(match_info[1]);
            }

            // load libs then code
            frame.contentWindow.lab_view.takeLibs(lib_hrefs, () => {
                frame.contentWindow.lab_view.takeSource(source + bootstrap);
            });
        }
    });


    // install editor:onchange listener to reload code after edit
    if (lab.settings.autorefresh) {
        editor.getSession().on('change', function(e) {
            lab.debounced_inject()
        });
    }

    // initial inject
    lab.inject();
}


// inject riggers a reload of the preview iframe, clearing state
// onload listener will inject code
lab.inject = function inject() {
    let frame = $('#preview')[0];
    frame.contentWindow.location.replace("js_lab_view.html");
};

// debounced version
lab.debounced_inject = lab.debounce(lab.inject, 500);





//////////////////////////////////////////
/// Lab View

lab_view = {};

lab_view.main = function main() {
    lab_view.setupConsole();
    window.onerror = function(messageOrEvent, source, lineno, colno, error) {
        console.log(`<span class="error"><b>${error}</b> on line <b>${lineno}</b></span>`);
    }
};

// takes an array of library urls, attaches them as <scripts>
// waits for onload/onerror on each before calling cb 
lab_view.takeLibs = function(hrefs, cb) {
    loaded_count = 0;
    error_count = 0;

    function checkCounts() {
        if (loaded_count + error_count === hrefs.length) {
            // console.log("Libraries Loaded");
            cb && cb();
        }
    }
    hrefs.forEach((href) => {
        var script = document.createElement('script');
        script.src = href;
        script.async = false;
        script.onload = () => {
            loaded_count++;
            // console.log(`Loaded: ${href}`);
            checkCounts();
        };
        script.onerror = () => {
            error_count++;
            console.log(`<span class="error">Error Loading: ${href}</span>`);
            checkCounts();
        }
        document.head.appendChild(script);
    });
};

lab_view.takeSource = function takeSource(source) {
    let script = $("<script async=false>");
    script.text(source);
    $("body").append(script);
};


lab_view.setupConsole = function setupConsole() {
    let console_log = null;
    lab_view.console_div = null;
    if (console.log) {
        // create a div to hold the onscreen log
        lab_view.console_div = $("<div class='lab-console'>");
        $("body").append(lab_view.console_div);

        // remember the real console log
        console_log = console.log;

        // overwrite console.log with our function
        console.log = function() {

            // echo to dom console
            lab_view.appendConsole.apply(this, arguments);

            // echo to the real console
            console_log.apply(this, arguments);
        };
    }
};

lab_view.appendConsole = function appendConsole() {
    let line = $("<div>");
    let args = [].slice.call(arguments);
    line.append(args.join(", "));
    lab_view.console_div.append(line);
};