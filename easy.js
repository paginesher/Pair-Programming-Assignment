// Easy #1 *8 Driver Jules
const initialArray = [2, 4, 7, 11, 15, 16];
function arraySorts(array){
    let evenArray =[];
    let oddArray=[];
    for ( let i = 0 ; i < array.length; i ++ ){
                if ( array [i] % 2 === 0){
                    evenArray.push(array[i])
                }else { oddArray.push(array[i])}
    }
    return console.log (`even numbers: ${evenArray}
odd numbers: ${oddArray}`);
}
console.log(arraySorts(initialArray));
    
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