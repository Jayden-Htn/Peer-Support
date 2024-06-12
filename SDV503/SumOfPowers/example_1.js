// Finding the base 2 power of a number

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

console.log(getBaseLog(2, 64));
// Example: 2**6 = 64

// Resource: Math.log() - JavaScript | MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
// Provided in assessment instructions