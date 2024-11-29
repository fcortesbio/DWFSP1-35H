/* 
Tareas: 

1. Escuchar cuando hacemos click

2. Escuchar el input / almacenar en una variable

3. Renderizar el output

*/


let input = document.getElementById("input");
let calcButton = document.getElementById("calcButton");
let text = document.getElementById("text");

calcButton.addEventListener("click", ()=>{
    console.log("click works as expected!")
});


function checkPair(integer){
    return integer % 2 === 0 ? "is pair" : "is not pair";
}
