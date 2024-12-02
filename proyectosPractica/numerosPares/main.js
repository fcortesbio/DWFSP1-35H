/* 
Tareas: 
1. Escuchar cuando hacemos click
2. Escuchar el input / almacenar en una variable
3. Renderizar el output

*/


let input = document.getElementById("input");
let calculateButton = document.getElementById("calculateButton");
let text = document.getElementById("text");

console.log(input);
console.log(calculateButton);
console.log(text);

let number 

// Capturar evento
input.addEventListener("input", (ev)=>{
    console.log(ev)
    number = ev.target.valueAsNumber ;
    console.log(number)
})

// ejecutar operación
calculateButton.addEventListener("click", ()=>{
    console.log("click works as expected!")
    let result = checkPair(number)

    // render result
    child = document.createElement("li")
    child.innerHTML = number + " " + result
    text.appendChild(child)

});

// Transforming values to different data types so we can 


function checkPair(integer){
    return integer % 2 === 0 ? "is pair" : "is not pair";
}