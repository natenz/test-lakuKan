// Soal 6 Reverse Words!
let text = "I am A Great human";
//let text = "Gusti made ADrian";
let words = text.split(" ");
let newResult = "";

for (let i = 0; i < words.length; i++) {

  // check words[i][0] isUppercase
  if (words[i][0] === words[i][0].toUpperCase()) {
    // reverse the word
    let reversedWord = words[i].split("").reverse().join("");
    reversedWord = reversedWord.toLowerCase();
    
    reversedWord = reversedWord[0].toUpperCase() + reversedWord.slice(1);

    newResult += reversedWord + " ";
  } else {
    newResult += words[i].split("").reverse().join("") + " ";
  }
}
console.log(newResult);