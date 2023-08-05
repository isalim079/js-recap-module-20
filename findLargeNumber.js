function findBigNumber (x) {
    let largest = x[0]
    for (let i = 1; i < x.length; i++) {
        let currentItem = x[i];
        if (currentItem > largest) {
            largest = currentItem;
        }
    }
    return largest;
}
let bigNumber = [89, 23, 12, 32, 43, 54, 17,123, 34];
console.log(findBigNumber(bigNumber));

// Find Biggest friends ---------------------------------

function findBigFriend(friends) {
    let bigFriend = friends[0];
    for (let items = 1; items < friends.length; items++) {
        if(friends[items].length > bigFriend.length) {
            bigFriend = friends[items];
        }
    }
    return bigFriend;
}

let friends = ['Buttu', 'Github','Linear', 'Color', 'Gradient'];
console.log(findBigFriend(friends), friends.length);