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
    
    while(i <= biggest_factor) {
        if(number % i == 0) {
            factors.push(i)
            if(biggest_factor == Infinity) {
                biggest_factor = number/i;
            }
        }
        i++;
    }

    return factors;
    
}

console.log(factors(10995116277))

rl.on('line', (input) => {
    
    rl.close();
});