function getOddNumberOfAnArray (number) {
    let oddNumbers = [];
    for (let i = 0; i < number.length; i++) {
        let index = i;
        let elements = number[index];
        if (elements % 2 !== 0) {
            console.log("This number is odd", index, elements);
            oddNumbers.push(elements)
        }
    }
    return oddNumbers;
}
let myNumbers = [10, 12, 34, 56, 23, 11, 56, 67];
let oddNumbers = getOddNumberOfAnArray(myNumbers);
console.log(oddNumbers);
