function evenAddition (even) {
    let sum = 0;
    for (let i = 0; i < even.length; i++) {
        let items = even[i];
        // console.log(items);
     if (items % 2 == 0){
        console.log(items);
        sum += items;
     }   
    }
    return sum;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = evenAddition(numbers);
console.log(total);