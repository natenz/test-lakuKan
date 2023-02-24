// Soal 4 | Multiple 3 and 5 
const solution = (num) => {
    let result = 0;
    let details = [];
    for(let i=1; i<num; i++){
        if(i%3 == 0 || i%5 == 0){
            result += i;
            details.push(i);
        }
    }
return { result, details };
}
let ans = solution(10);
console.log(`${ans.result} = ${ans.details.join(' + ')}`)