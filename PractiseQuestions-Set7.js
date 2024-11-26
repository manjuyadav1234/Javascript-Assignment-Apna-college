//Create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string.
function checkVowels(word){
    let m=0;
    for(let i of word){
        
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
           m++;
        }
    }
return m;
}

let v=checkVowels("Mona yadav");
console.log(v);
//Create an arrow  function to perform the same task
let vowelArray=['a','v','r','p','q','s','k','e','i','o','u'];
function checkArrayVowels(Word){
    let m=0;
    for(let i of Word){
        
        if(i=='a' || i=='e' || i=='i' || i=='o' || i=='u'){
           m++;
        }
    }
return m;
}
let a=checkArrayVowels(vowelArray);
console.log(a);
