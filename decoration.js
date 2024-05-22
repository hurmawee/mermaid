const leftD = document.querySelector(".leftDecoration");
const rightD = document.querySelector(".rightDecoration");
const textF = document.querySelector(".textFrame")

let arrayDec = ["dec1.svg","dec2.svg","dec3.svg","dec4.svg","dec5.svg","dec6.svg"];
const numberEl =  +textF.offsetHeight / 151;

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