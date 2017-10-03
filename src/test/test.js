import './test.scss'

console.log("test.js");

export default function test() {
    console.log("test()");
}

$(attach);

function attach(){
    console.log("attach");
    $(".test").on("click", ()=>{alert("test");});
}