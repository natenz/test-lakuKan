// Soal 1 Biggest Number
function maxRedigit(num){
    if(num <= 0 ) return null;
    let numString = num.toString();
    let maxValue = 0;

    //sorting
    let sortedString = numString.split('').sort((a,b) => b - a ).join('');
    maxValue = parseInt(sortedString);
    if(maxValue == num) return null;
    return maxValue;
}
console.log(maxRedigit(123));
console.log(maxRedigit(231));
console.log(maxRedigit(99));