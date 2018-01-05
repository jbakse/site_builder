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

    // create the "maxamize" link to open the lab as its own page
    $('#maxamize').attr("href", window.location);
    $('#maxamize').attr("target", "_top");
    if (!inIframe()) {
        $('#maxamize').hide();
    }



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

        let frame = $('#preview')[0];
        if (frame.contentWindow.lab_view) {
            let source = editor.getValue();


            // regex matches "// require (url)"
            let require_regex = /^\/\/ ?require (.*?)$/gm;

            // collect requested libs
            let lib_hrefs = [];
            while (match_info = require_regex.exec(source)) {
                lib_hrefs.push(match_info[1]);
            }

            // load libs then code
            frame.contentWindow.lab_view.takeLibs(lib_hrefs, () => {
                frame.contentWindow.lab_view.takeSource(source);

                let bootstrap = `\nif (typeof p5 !== 'undefined') {new p5();}`;
                frame.contentWindow.lab_view.takeSource(bootstrap);

                frame.contentWindow.lab_view.show();
            });
        }
    });

    $(window.parent).on('scroll', lab.scroll);

    // install editor:onchange listener to reload code after edit
    if (lab.settings.autorefresh) {
        editor.getSession().on('change', function(e) {
            lab.debounced_inject()
        });
    }

    // initial inject
    lab.scroll();
}



// inject triggers a reload of the preview iframe, clearing state
// onload listener will inject code
lab.inject = function inject() {
    let frame = $('#preview')[0];
    let f_visible = check_frame_visible();
    if (f_visible) {
        // console.log("inject");
        frame.contentWindow.location.replace("/js_lab/js_lab_view.html");
    }
};


lab.was_frame_visible = false;
lab.scroll = function scroll() {
    // console.log("scroll");
    let is_frame_visible = check_frame_visible();
    if (!lab.was_frame_visible && is_frame_visible) {
        lab.show();
    }
    if (lab.was_frame_visible && !is_frame_visible) {
        lab.hide();
    }

    $("body").toggleClass("visible", is_frame_visible);

    lab.was_frame_visible = is_frame_visible;
}

lab.hide = function hide() {
    // console.log("hide");
    let frame = $('#preview')[0];
    frame.contentWindow.location.replace("about:blank");
}

lab.show = function show() {
    // console.log("show");
    lab.inject();
}

// debounced version
lab.debounced_inject = lab.debounce(lab.inject, 500);


function check_frame_visible() {

    let w = $(window.parent);
    let f = $(window.frameElement);

    // if we are not in a frame, then we are visible
    if (f.length === 0) {
        return true;
    }

    let window_top = w.scrollTop();
    let window_bottom = window_top + w.height();

    let frame_top = f.offset().top;
    let frame_bottom = frame_top + f.height();

    let is_frame_partially_visible = (frame_bottom > window_top && frame_top < window_bottom);
    let is_frame_fully_visible = (frame_top > window_top && frame_bottom < window_bottom);
    return is_frame_partially_visible;
}



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
            cb && cb();
        }
    }
    hrefs.forEach((href) => {
        var script = document.createElement('script');
        script.src = href;
        script.async = false;
        script.onload = () => {
            loaded_count++;
            checkCounts();
        };
        script.onerror = () => {
            error_count++;
            console.log(`<span class="error">Error Loading: ${href}</span>`);
            checkCounts();
        }
        document.head.appendChild(script);
    });

    checkCounts();
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
    line.append(args.join(" "));
    lab_view.console_div.append(line);
};

lab_view.show = function show() {
    $(".cover").removeClass("visible");
}



function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}



//////////////////////////////////////////
/// Show - Code for a view that just shows the sketch with no code/editing


let show = {};

show.main = function main() {

    console.log("hello, world");
    let script_name = window.location.search.substr(1) || "example.js";


    let jqxhr = $.ajax({
        url: script_name,
        success: function(source) {
            show.inject(source);
        },
        dataType: "text"
    });
};


show.inject = function(source) {
    // regex matches "// require (url)"
    let require_regex = /^\/\/ ?require (.*?)$/gm;

    // collect requested libs
    let lib_hrefs = [];
    while (match_info = require_regex.exec(source)) {
        lib_hrefs.push(match_info[1]);
    }

    // load libs then code
    lab_view.takeLibs(lib_hrefs, () => {
        lab_view.takeSource(source);

        let bootstrap = `\nif (typeof p5 !== 'undefined') {new p5();}`;
        lab_view.takeSource(bootstrap);

        // lab_view.show();
    });
}