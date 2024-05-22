const leftBtn = document.querySelector(".btnLeft")
const rightBtn = document.querySelector(".btnRight")

let height;
leftBtn.addEventListener("click", function () {
    height = window.innerHeight - 100;
    window.scrollBy(0,-height)
})
rightBtn.addEventListener("click", function () {
    height = window.innerHeight - 100;
    window.scrollBy(0,height)
})