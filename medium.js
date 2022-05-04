//medium (1) Driver PJ
function vowelChecker(letter){
    var vowel=['a','e','i','o',"u"];
    if (vowel.indexOf(letter)!=-1){
        console.log(`"${letter}" is a vowel.`)
        return; 
    }
    else {
        console.log(`"${letter}" is not a vowel.`);
        return;
    }
}
console.log("Medium #1")
vowelChecker('a');
vowelChecker("w");


//medium #2 Driver Jules
function stringCheck (s1,s2){
    
    if (s1.toLowerCase().split("").sort().join("").trim() === s2.toLowerCase().split("").sort().join("").trim()){
        console.log(`input:string1: ${s1}
string2: ${s2}`)

        console.log('true')
        return ;
    }else{
        console.log(`input:string1: ${s1}
string2: ${s2}`)

        console.log ('false')
        return;
    }
}
stringCheck("programing assignment","javascript","chicken");
stringCheck("Madonna of the Rocks","So dark the con of man");


//medium 3 #Driver PJ
function largestPositiveInteger(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  console.log("Medium #3")
  console.log(largestPositiveInteger(336, 360));
  console.log(largestPositiveInteger(78, 126));


//medium #4
// Driver Jules
const car={ carMake:"Nissan", carModel:"Altima",carYear:"2020",carMileage:25,carColor:"blue",
driveToWork: function(){let oldMileage = this.carMileage; this.carMileage += 33;
console.log(`oldMileage:${oldMileage}| newMileage: ${this.carMileage}`); } ,
driveAroundWorld :function () {let oldMileage = this.carMileage; this.carMileage += 24000;
console.log(`oldMileage:${oldMileage}| newMileage: ${this.carMileage}`); } ,
runErrands :function () {let oldMileage = this.carMileage; this.carMileage += 30;
    console.log(`oldMileage:${oldMileage}| newMileage: ${this.carMileage}`); }

};
car.driveToWork ();
car.driveAroundWorld ();
car.runErrands ();

