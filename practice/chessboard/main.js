function swap_block(block) {
    var block
    return block == "___"? "###" : "___";
}

let chessRow = ""
let block = "###"

for (let i = 0; i<8; i++) {
    for (let j = 0; j < 8; j++){
        chessRow += block
        block = swap_block(block)
    }
    console.log(chessRow)   
    block = swap_block(block)
    chessRow = ""
}


console.log("Ahora sí, la respuesta correcta: ")

for (let n = 0; n<8; n++){
    let row = "";
    for (let m = 0; m < 8; m++) {
        if (n%2 == 0){
            row += m%2 == 0? "###" : "___"
        }
        else {
            row += m%2 ==0? "___" : "###"
        }
    }
    console.log(row)
}


// output: (i, j)
for (let i = 0; i < 8; i++) {
    let row = "";
    for (let j=0; j<8 ; j++){
        row += ("\("+ i + "," + j + "\)")
    }
    console.log(row)
}

// output: suma i + j
for (let i = 0; i < 8; i++) {
    let row = "";
    for (let j=0; j<8 ; j++){
        row += ("\(" + (i + j) + "\)")
    }
    console.log(row)
}

// output: "###" if (i + j) % 2 === 0 else "___" 
console.log ("la solución más sencilla:")
for (let i = 0; i < 8; i++) {
    let row = "";
    for (let j = 0; j < 8; j++) {
        row += (i + j) % 2 === 0 ? "###" : "___"; 
    }
    console.log(row);
}


    // for (let n = 0; n<8; n++){
    //     let string = ""
    //     let start = 8*n +1
    //     for (let m = 0; m<8; m++){
    //         string += start
    //         // string += start%2 == 0 ? "###" : "___"        
    //         start += 1
    //         }
            
    //     console.log(string)
    //     string = ""
    // }