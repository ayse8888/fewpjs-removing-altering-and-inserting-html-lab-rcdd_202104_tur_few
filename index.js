// Write your code here!

const main = document.querySelector("main#main");
main.remove();

const newHeader = document.createElement("h1#victory");
newHeader.innerText = ""
document.body.appendChild(newHeader)
console.log(newHeader)