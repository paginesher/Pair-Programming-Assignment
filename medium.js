//medium (1)

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


//medium 2
function stringCheck (s1,s2){
    let string1=s1.toLowerCase().split('').sort().join('').trim();
    let string2=s2.toLowerCase().split('').sort().join('').trim();
    if (string1 ===string2){
        console.log(`true`);
        return;
    }
    else if(string1!=string2){
        console.log(string1);
        console.log(string2);
        console.log("False");
        return;
    }else{
        console.log("error");
    }
}
console.log("Medium #2")
stringCheck("programing assignment","javascript");
stringCheck("Madonna of the Rocks","So dark the con of man");
stringCheck("dormitory","dirtyroom");


//medium 3
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
