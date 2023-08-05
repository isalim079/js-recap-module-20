let factorial = 6;   /* We are going to make 6! code. Which is 6*4*3*2*1 */
let result = 1;
for (let i = factorial; 1 <= i; i--) {
    // console.log(i);
    result *= i;
}
console.log(result); /* And this is the answer of 6! */


// With function ---------------------------------

function factorial2 (number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    let results = 1;
    for(let j = number; j >= 1; j--) {
        results *= j;
    }
    return results;
}
let numbers = (5);
console.log(factorial2(numbers));
