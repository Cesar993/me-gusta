
var likes = document.querySelector("#cantidadLike")
var likes2 = document.querySelector("#cantidadLike2")
var likes3 = document.querySelector("#cantidadLike3")
var countElement = document.querySelector("btn")
var countElement = document.querySelector("btn2")
var countElement = document.querySelector("btn3")
var count = 9;
var count2 =12;
var count3 =9;
function like() {

    likes.innerText = count + " like(s)"
    count ++;
}
function like2() {

    likes2.innerText = count2 + " like(s)"
    count2 ++;
}
function like3() {

    likes3.innerText = count3 + " like(s)"
    count3 ++;
}

