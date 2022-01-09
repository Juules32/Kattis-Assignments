/*
Compute the 


*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const factors = number => {
    let biggest_factor = Infinity;
    let factors = []
    let i = 2;
    
    while(i < biggest_factor) {
        if(number % i == 0) {
            factors.push(i, number/i)
            biggest_factor = number/i;
        }
        i++;
    }
    factors.push(number)
    return factors.sort(function(a, b){return a - b});
    
}

const find_biggest_k = (number, factors) => {
    let factor_length = factors.length
    let i = 0;
    let biggest_k = 0;
    while(factors[i] != undefined) {
        let j = i;
        let local_total = 0
        while(true) {

        }
        i++;
    }
    //Der skal sikkert bruges recursive ;(
}

console.log(factors(1099511627776))

rl.on('line', (input) => {
    
    rl.close();
});