function squareNumbers(numbers){
let squared = [];

for(i=0;i<numbers.length;i++)
{
    squared.push(numbers[i] * numbers[i]);

}
return squared;

}
const numbers =[1,2,3,4,5]
let squaredNumbers = squareNumbers(numbers)
console.log(squaredNumbers);
