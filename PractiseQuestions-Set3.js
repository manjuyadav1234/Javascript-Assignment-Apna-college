//WAP to print all even numbers from 0 to 100

//By using the for loop
for(let i=0;i<=100;i++){
    console.log(i);
}
//By using the while loop
let i=0;
while(i<=100){
    console.log(i);
    i++;
}

//By using the do while loop
let k=0;
do{
    console.log(k);
    k++;
}while(k<=100);



//WAP that exactly likes the randon number game
let gameNum=25;
let randomNum=prompt("Enter the number :");
while(randomNum !=gameNum){
    userNum=prompt("You have entered wrong number, Guess again :");
}
console.log("Congratulations, you have entered the right number");