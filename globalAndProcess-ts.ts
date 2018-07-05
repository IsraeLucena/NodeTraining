import { factorial } from './factorial'
import * as yargs from 'yargs'
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
Execute node globalAndProcess.js --num=8
*/