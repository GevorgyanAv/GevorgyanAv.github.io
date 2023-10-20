let box = document.querySelector('.box')
let prew_button = document.querySelector('.prew_button')
let next_button = document.querySelector('.next_button')

let arr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']
let x = 0

next_button.onclick = function () {
    if (x < arr.length - 1) {
        x++
        box.style.backgroundImage = `url(../images/${arr[x]})`
        // x > 0 ? (box.style.backgroundImage = `url(${arr[x]})`) : "";
    } else {
        x = 0
        box.style.backgroundImage = `url(../images/${arr[x]})`
    }
}
prew_button.onclick = function () {
    if (x > 0) {
        x--
        box.style.backgroundImage = `url(../images/${arr[x]})`
    } else {
        x = arr.length - 1
        box.style.backgroundImage = `url(../images/${arr[x]})`
    }
}
