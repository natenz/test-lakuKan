// Soal 7 | Find The Middle Aplhabet

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const solution = (firstLetter, secondLetter) => {
    const firstLetterIndex = alphabet.indexOf(firstLetter);
    const secondLetterIndex = alphabet.indexOf(secondLetter);

    let distance = secondLetterIndex - firstLetterIndex -1;
    if(distance % 2 == 0){
        return alphabet[firstLetterIndex + distance/2] + alphabet[firstLetterIndex + distance/2 + 1 ];
    }else {
        return alphabet[firstLetterIndex + Math.floor(distance/2) + 1 ];
    }
};

let firstLetter = 'Q';
let secondLetter = 'Z';

console.log(`The Middle letter between ${firstLetter} and ${secondLetter} is ${solution(firstLetter, secondLetter)}`);
