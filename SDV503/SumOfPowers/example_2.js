// Find remainder from base 2 power of a number

function findRemainderAfterFirstPower(n) {
    firstPower = Math.floor(6.1);
    number1 = 2 ** firstPower
    number2 = n - number1;
    return `Find if there is a power of 2 that equals: ${number2}`
}

console.log(findRemainderAfterFirstPower(68));
// Example: (2**6 = 64) + 4 = 68