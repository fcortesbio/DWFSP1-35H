function isMultiple(number, criteria) {
    return number % criteria === 0 ? true : false ; 
}

function fizzbuzz(number) {
    if (isMultiple(number, 3) & isMultiple(number, 5)) {
        // Multiple of both 3 and 5
        return "fizz-buzz";
    }
    else {
        if (isMultiple(number, 3)){
            // Multiple of 3 only
            return "fizz";
        }
        else{
            if(isMultiple(number, 5)){
                // Multiple of 5 only
                return "buzz";
            }
            else {
                // Not multiple 
                return number;}}}}

// outputs = []

// for (let i = 0; i < 100; i++){
//     outputs.push(fizzbuzz(i))
// }

// console.log(outputs)

text

for (let i = 1; i < 100; i++){
    console.log(fizzbuzz(i))
    // render result
    child = document.createElement("li")
    child.innerHTML = fizzbuzz(i)
    text.appendChild(child)
}