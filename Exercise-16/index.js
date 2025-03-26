var prompt = require('prompt-sync')(); 

var n  = prompt("Enter :")

for(let i = 1 ; i <= n ; i++){
    for(let j = 1 ; j <= i ; j++){
        process.stdout.write(j +" ")
    }
    console.log()
}