// function fibonacci(number) {
//     return (number < 2) ? number : fibonacci(number - 1) + fibonacci(number - 2);  
// }

// function factorial(number) {
//     return (number == 0) ? 1 : number * factorial(number - 1);
// }




function fibo1(n) {
    let a = 0; 
    let b = 1; 
    let c 
    if (n == 0 || n == 1) {
        return n
    }
    else {
        for (i=2; i< n; i++) {
            c = a + b
            a = b
            b = c
        }
    return c
    }
}


function fibo3(n) {
    /*
    Return a list of 'n' elements of the fibonacci series
    */
    let fibos = [0, 1];

    if (n > 1) {
        for (i=2; i < n; i++){
           let c = fibos[fibos.length-1] + fibos[fibos.length-2]
           fibos.push(c) 
        }
    }

    return fibos
}




// list = ["a", "b", "c"]
// console.log("ultimo: "+ list[list.length-1])



console.log(fibo3(5))

// console.log(factorial(9))

// console.log("Fibonacci list:")

// let list_fibos = []
// for (let i = 0; i <9; i++) {
//     list_fibos.push(fibo(i));
// }
