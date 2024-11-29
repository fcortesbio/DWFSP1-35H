/* 
Tareas: 
1. Escuchar cuando hacemos click
2. Escuchar el input / almacenar en una variable
3. Renderizar el output
*/

let input = document.getElementById("input");
let calcButton = document.getElementById("calcButton");
let text = document.getElementById("text");

console.log(input)
console.log(calcButton)
console.log(text)

// calculate.addEventListener("click", ()=>{
//     console.log("Button is working!")
// })

function checkPair(integer){
    return integer % 2 === 0 ? "is pair" : "is not pair";
}