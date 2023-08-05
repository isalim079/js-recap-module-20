function numbers (x, y) {
    if(typeof x !== "number" || typeof y !== "number") {
        return "Please give me two numbers"
    }
    return x + y;
}
console.log(numbers(3, 5));


// Another Calculation with array ------------------------------------

function findSum(arr){
    if(!Array.isArray(arr)) {
        console.log("Please provide me an array");
    }
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}
let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(findSum(arrays));