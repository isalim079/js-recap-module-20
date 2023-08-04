function information (info) {
    let sentence = "My name is " + myInfo.name + ". " +"I am " + myInfo.age + ". " + "I live in " + myInfo.address + ".";
    return sentence;
}
const myInfo = {
    name: 'Salim',
    age: 24,
    address: 'Dhaka',
}
console.log(information(myInfo));