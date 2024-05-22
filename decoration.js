const leftD = document.querySelector(".leftDecoration");
const rightD = document.querySelector(".rightDecoration");
const textF = document.querySelector(".textFrame")

let arrayDec = ["dec1.svg","dec2.svg","dec3.svg","dec4.svg","dec5.svg","dec6.svg"];

let width = +leftD.offsetWidth;
console.log(width)
let heightEl = width * 0.65;

const numberEl =  +textF.offsetHeight / 150 - 2;

for (let i = 0; i < numberEl; i++){
    let dec = document.createElement("img");
    let url = "res/" + arrayDec[getRandomInt(6)];
    dec.setAttribute("src",url)
    leftD.appendChild(dec);
    dec = document.createElement("img");
    url = "res/" + arrayDec[getRandomInt(6)];
    dec.setAttribute("src",url)
    rightD.appendChild(dec);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}