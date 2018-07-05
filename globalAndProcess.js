const factorial = require('./factorial')
const yargs = require('yargs')
console.log('Function n-factorial')
console.log(`Executing the script on directory ${process.cwd()}`)

process.on('exit', () => {
    console.log('The scrip is about to end')
})

const argv = yargs.demandOption('num').argv
const num = argv.num
console.log(`The factorial of ${num} is equals to ${factorial(num)}`)

console.log('Modules search preview' + module.paths)

/*
Execute "node globalAndProcess.js --num=8"

Execute with debug "node --inspect globalAndProcess.js --num=8"

Execute with debug break "node --inspect-brk globalAndProcess.js --num=8"

*/