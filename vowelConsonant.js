function vowelConsonant (text) {
    if(typeof text !== "string") {
        return "Please provide me a string"
    }
    let vowel = 0;
    let consonant = 0;
    let space = 0;
    let vowelArray = [];
    let consonantArray = [];

    for(let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            vowel++;
            vowelArray.push(char);
        }
        else if(char !== " "){ 
            consonant++;
            consonantArray.push(char);
        }
        else {
            space ++;
        }
    }
    let obj = {
        vowelCount: vowel,
        consonantCount: consonant,
        spaceCount: space,
        vowelArray: vowelArray,
        consonantArray: consonantArray
    }
    return obj;
}
let text = "I am a Bangladeshi";
console.log(vowelConsonant(text));