const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const inversions = byte => {
    let num_zeros = 0;
    let inversions = 0;
    for(i = 0; i < byte.length; i++) {
        if(byte.charAt(i) == "0") {
            inversions += i - num_zeros;
            num_zeros += 1;
        }
    }
    return inversions;
}

function dec2bin(dec, num_question) {
    
    let length_of_bin = (dec).toString(2).length
    
    let num_zeros = num_question - length_of_bin
    let result = ""
    for(i = 0; i < num_zeros; i++) {
        result += "0"
    }
    return result += (dec).toString(2) + "";
}

const construct_byte = (byte, num_question, pattern) => {
    let result = byte
    
    for (let i = 0; i < num_question; i++) {
        result = result.replace(/\?/, pattern.charAt(i))
    }
    return result
}

rl.on('line', (input) => {
    rl.close();
    let result = 0;
    let num_question = input.split("?").length - 1
    let possible_bytes = 2**(num_question);
    for (let i = 0; i < possible_bytes; i++) {
        result += inversions(construct_byte(input, num_question, dec2bin(i, num_question)))
    }        
    console.log(result % 1000000007)
});