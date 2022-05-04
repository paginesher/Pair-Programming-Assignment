//* Driver Jules *//
function brackets (str){
    const stack=[];
    let boolVar;
    for (let i=0;i<str.length;i++){
        const stackVar=str[i];
        if (stackVar==='{'||stackVar==='['||stackVar==='('){
            stack.push(stackVar);
        }
        let check;
        switch (stackVar){
            case '}':
                check=stack.pop();
                if (check==='['||check==='(')
                return console.log(false);
                break;
            case ']':
                check=stack.pop();
                if (check==='{'||check==='(')
                return console.log(false);
                break;
            case ')':
                check=stack.pop();
                if (check==='{'||check==='[')
                return console.log(false);
                break;
        }
    }
    if(stack.length===0){
       return console.log(boolVar=true);
    }else if(stack.length!=0) {
        return console.log(boolVar=false);
    }
}
let str1="{hello world}";
let str2="{hello world)";
brackets(str1);
brackets(str2);