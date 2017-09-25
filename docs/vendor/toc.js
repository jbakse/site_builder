
$(() => {
    console.log("hello", $);
    $("h1, h2, h3, h4, h5, h6").each((i, element) => {


        let $e = $(element);
        let title = $e.text();
        let link = "#" + $e.attr("id");
        let tag_name = $e.get(0).tagName.toLowerCase();

        let x = $("#toc").append(`<li class="toc_${tag_name}"><a href="${link}">${title}</a></li>`);

        console.log($(".toc"), x);
    });
});