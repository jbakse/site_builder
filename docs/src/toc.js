
$(() => {
    console.log("hello", $);
    $("h1, h2, h3, h4, h5, h6").each((i, element) => {

        let $e = $(element);
        let title = $e.text();
        let link = "#" + $e.attr("id");
        let tag_name = $e.get(0).tagName.toLowerCase();

        let x = $("#toc").append(`<li class="toc_${tag_name}"><a href="${link}">${title}</a></li>`);


    });

    $(window).on("scroll", (event) => {
        // scroll_margin: minimum distance from top of window element must reach to be considered current
        let scroll_margin = 100;

        // clear active class from all toc entries
        $('a').removeClass("active");

        // get window height
        let window_pos = $(window).scrollTop();

        // abort if at top
        if (window_pos === 0) {
            return false;
        }

        // find the element closest to (and below) the top of the page (+scroll_margin)    
        let $current_element = null;
        $("h1, h2, h3, h4, h5, h6").each((i, element) => {
            let $e = $(element);

            if ($e.offset().top > window_pos + scroll_margin) {
                return false;
            }
            $current_element = $e;
        });

        // higlight toc for element
        if (!$current_element) {
            return;
        }
        let id = $current_element.attr("id");
        $(`a[href="#${id}"]`).addClass("active");


    });

});