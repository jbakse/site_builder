function setupConsole() {
    var console_log = null;
    var console_div = null;
    if (console.log) {
        // create a div to hold the onscreen log
        console_div = $("<div class='lab-console'>");
        $("body").append(console_div);

        // remember the real console log
        console_log = console.log;

        // overwrite console.log with our function
        console.log = function () {
            // build a dom line to show the logged info
            var line = $("<div>");
            var args = [].slice.call(arguments);
            line.append(args.join(", "));
            console_div.append(line);

            // echo to the real console
            console_log.apply(this, arguments);
        };

    }

}
