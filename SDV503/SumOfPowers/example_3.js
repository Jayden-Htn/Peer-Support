// Check if a number is a whole number

function checkWholeNumber(n) {
    return(`Is ${n} a whole number? ${Number.isInteger(n)}`)
}

console.log(checkWholeNumber(2.1));
// Example: 2.1 = false