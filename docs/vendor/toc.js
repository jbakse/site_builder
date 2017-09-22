
$(() => {
    console.log("hello", $);
    $("h1, h2, h3, h4").each((i, element) => {


        element = $(element);
        title = element.text();
        link = "#" + element.attr("id");

        let x = $("#toc").append(`<li><a href="${link}">${title}</a></li>`);

        console.log($(".toc"), x);
    });
});