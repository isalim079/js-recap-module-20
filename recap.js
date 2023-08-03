var myName = 'Jhambul'   /* This is a variable */

var friends = ['Milu', 'Chilu', 'Bilu', 'Ghilu', 'Malu', 'Kalu'];    /* friends is an array which contains in third bracket. I use name which is strings. So, I have to put them in quotes */

console.log(friends[2]);    /* By this 'friends[2]' command I can know the index of no 2 position. Index counts starts from 0. so the 2 position index is Bilu. This is the output for this*/

var friend = friends[2];
console.log(friend);     /* This is another way to know which value is in position of index 2. I set the variable here for the index. and print it */

friends[2] = "Mintu"     /* This way we can replace array value. I replace index 2 position Bilu with Mintu */
console.log(friends);

if (friends.length < 2) {
    console.log("You have no friends");    /* This is conditional */
}
else{
    console.log("You have many friends");
}

/* Loop */

var number = 0;
while (number <= 7) {
    console.log(number);
    number++;   /* With ++ it will increase value 1 every time */
}

for (var i = 0; i <= 10; i++) {
    console.log(i);
}