console.log('hello')
console.log(parseInt('4A'))
console.log('Function n-factorial')

const factorial = (num) => {
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log(`The factorial of 5 is equals to ${factorial(5)}`)