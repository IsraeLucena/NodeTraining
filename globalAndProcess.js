console.log('Function n-factorial')
console.log(`Executing the script on directory ${process.cwd()}`)

process.on('exit', () => {
    console.log('The scrip is about to end')
})

const factorial = (num) => {
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1)
}
const num = parseInt(process.argv[2])
console.log(`The factorial of ${num} is equals to ${factorial(num)}`)