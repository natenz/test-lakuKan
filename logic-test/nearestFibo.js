// Soal 5 | Nearest Fibonacci

let arr = [15, 1, 3];
let sum = 0;

//Jumlah ARR
for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let fib = [0, 1];
for(let i = 2; i < sum; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    if(fib[i] > sum) {
        break;
    }
}
console.log(`Jumlah Array : ${sum}`);
console.log(`Fibonacci: ${fib}`);
//Selisih array terakir (-1) dan kedua terakir (-2)
if(Math.abs(fib[fib.length - 1] - sum) > Math.abs(fib[fib.length - 2] - sum)) {
    console.log(sum - fib[fib.length - 2]);
} else {
    console.log(fib[fib.length - 1] - sum);
}