// EASY (1) 
// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even 
// numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
//   Odd Numbers: [7, 11, 15]
// ** Driver Jules **
// Easy #1
const initialArray = [2, 4, 7, 11, 15, 16];
function arraySorts(array){
    let evenArray =[];
    let oddArray = [];
    for ( let i = 0 ; i < initialArray; i ++ ){
                if ( initialArray [i] % 2 === 0){
                    evenArray.push[i] = initialArray [i];
                }else { oddArray.push[i] = initialArray [i];}

    }
    return console.log (`even numbers: ${evenArray}
    odd numbers: ${oddArray}`);
}
console.log(arraySorts(initialArray));

const numbers = [2,4,7,11,15,16]
oddArray = [7,11,15]
evenArray = [2,4,16]
    function odd(){
        console.log()
    
//Driver PJ
// Easy #2
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myPrimeArray = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return num !== 1;
})
console.log(myPrimeArray);