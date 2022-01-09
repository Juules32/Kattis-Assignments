const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let w = []
let n = []

rl.on('line', (input) => {
    let cmd = input.split(" ")
    if(cmd[0] == "def") {
        if(w.includes(cmd[1])) {
            let i = w.indexOf(cmd[1])
            w.splice(i, 1)
            n.splice(i, 1)
        }
        w.push(cmd[1])
        n.push(parseInt(cmd[2]))
    }

    else if (cmd[0] == "calc") {
        cmd = cmd.filter(word => word != "calc");
        let desc = cmd.join(" ") + " ";
        let result = n[w.indexOf(cmd[0])]

        for (let i = 0; i < cmd.length; i += 2) {
            if(!w.includes(cmd[0])) {
                result = "unknown"
                console.log(desc + result)
                return;
            }
        }
        for (let i = 1; i < cmd.length; i += 2) {
            if(cmd[i] == "+") result += n[w.indexOf(cmd[i+1])]
            else if (cmd[i] == "-") result -= n[w.indexOf(cmd[i+1])]
        }
        if (!n.includes(result)) result = "unknown"
        else result = w[n.indexOf(result)]
        console.log(desc + result)
    }

    else if (cmd[0] == "clear") {
        w = []
        n = []
    }

    else rl.close();
});