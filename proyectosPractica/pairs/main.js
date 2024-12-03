/* 
Tasks: 
1. Listen for click event
2. Listen for input / store in a variable
3. Clear/render output

*/

let input = document.getElementById("input");
let calculateButton = document.getElementById("calculateButton");
let text = document.getElementById("text");

let number;

// Capture input event
input.addEventListener("input", (ev) => {
    number = ev.target.valueAsNumber;
});

// Execute operation
calculateButton.addEventListener("click", () => {
    let result = checkPair(number);

    // Clear previous content 
    text.innerHTML = "";

    // Render result
    let child = document.createElement("p");
    child.innerHTML = number + " " + result;
    text.appendChild(child);
});

function checkPair(integer) {
    return integer % 2 === 0 ? "es par" : "no es par";
}