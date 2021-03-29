function family(firstnames) {
    console.log(firstnames + ' is a arain');
}

let name1 = 'saad';
let name2 = 'mobi';
let name3 = 'moon';

family(name1);  //saad is a arain
family(name2);  //mobi is a arain
family(name3);  //moon is a arain

function family1(firstnames, hobby = ' my hobby is nothing') //this is default value.
 {
    console.log(firstnames + '' + hobby);
}

let hobby= ' play cricket';

family1(name1 , hobby) //result: saad play cricket

//return functions
function sum(a,b,c) {
    let d = a + b + c 
    return d;
}

let returnVal = sum(2,4,6)
console.log(returnVal);

function assignment(a,b) { 
    let c = a - b ;

    

    return c;
    
}
let home= assignment(44,5);
console.log(home);