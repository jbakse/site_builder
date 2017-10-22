import "./style.scss"


$(main);

function main() {
    $('.carousel').carousel({
        interval: false,
        wrap: false
    })
    $('.carousel').carousel('pause');
}