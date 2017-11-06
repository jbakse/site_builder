import "./style.scss"


$(main);

function main() {
    $('.carousel').carousel({
        interval: false,
        wrap: false
    })
    $('.carousel').carousel('pause');
}


// $(document).ready(function() {

//     // $(".menu-dropdown").addClass("active");
//     $(".topic-section").css({
//         "display": "inherit"
//     });

//     $(document).on("click", ".logo", function() {
//         if ($(".menu-dropdown").hasClass("active")) {
//             $(".menu-dropdown").removeClass("active");
//         } else {
//             $(".menu-dropdown").addClass("active");
//         }
//     });

//     $(document).on("click", ".menu-dropdown ul li", function() {
//         $(".menu-dropdown").removeClass("active");
//         // $(this).attr('id');
//         $(".topic-section").css({
//             "display": "inherit"
//         });
//     });

// });