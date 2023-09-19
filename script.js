
var likes = [9,12,9];
var person = [
    document.querySelector("#cantidadLike"),
    document.querySelector("#cantidadLike2"),
    document.querySelector("#cantidadLike3")
]
function like(num) {

    likes[num] ++;
    person[num].innerText = likes[num] + " like(s)";   
}


