// Soal 3 Alternate Case 

const alternateCase = (letters) => {
    var newLetters = "";
    for (let i=0; i<letters.length; i++){
        if(letters[i] == letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
        }else{
            newLetters += letters[i].toLowerCase();
        }
    }
    console.log(newLetters);
    return newLetters;
}

var alternateCaseResult = alternateCase('abc');
var alternateCaseResult = alternateCase('Hello World!');
var alternateCaseResult = alternateCase('ABC');