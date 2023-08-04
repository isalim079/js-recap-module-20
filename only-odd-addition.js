// With for of loop-------------------------------

// function oddAddition (odd) {
//     let sum = 0;
//     for (let items of odd) {
//      if (items % 2 == 1){
//         sum += items;
//      }   
//     }
//     return sum;
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = oddAddition(numbers);
// console.log(total);

// Another Way---------------------------------------

function oddAddition (odd) {
    let sum = 0;
    for (let i = 0; i < odd.length; i++) {
        let items = odd[i];
        console.log(items);
     if (items % 2 == 1){
        sum += items;
     }   
    }
    return sum;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = oddAddition(numbers);
console.log(total);