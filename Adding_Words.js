const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let variables = []

const find_value = variable => {
    for (let i = 0; i < variables.length; i++) {
        if(variables[i][0] == variable) return variables[i][1]
    }
    return -1;
}

const find_variable = value => {
    for (let i = 0; i < variables.length; i++) {
        if(variables[i][1] == value) return variables[i][0]
    }
    return -1
}

rl.on('line', (input) => {
    let command_words = input.split(" ")
    if(command_words[0] == "def") {
        if(find_value(command_words[1]) != -1) {
            for (let i = 0; i < variables.length; i++) {
                if(variables[i][0] == command_words[1]) {
                    variables.splice(i, 1)
                    break;
                }
            }
        }
        variables.push([command_words[1], parseInt(command_words[2])])
    }

    else if (command_words[0] == "calc") {
        command_words = command_words.filter(word => word != "calc");
        let desc = command_words.join(" ") + " ";
        let result = find_value(command_words[0])
        for (let i = 0; i < command_words.length; i += 2) {
            if(find_value(command_words[i]) == -1) {
                result = "unknown"
                console.log(desc + result)
                return;
            }
        }
        for (let i = 1; i < command_words.length; i += 2) {
            if(command_words[i] == "+") result += find_value(command_words[i+1])
            else if (command_words[i] == "-") result -= find_value(command_words[i+1])
        }
        if (find_variable(result) == -1) result = "unknown"
        else result = find_variable(result)
        console.log(desc + result)
    }

    else if (command_words[0] == "clear") {
        variables = []
    }

    else rl.close();
});