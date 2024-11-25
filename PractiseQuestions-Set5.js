//WAP to print the average marks of the array
let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum +=val;
}
let avg=sum/marks.length;
console.log(`Average marks of the class =${avg}`);
//WAP  that all the items have an offer of 10% OFF on them. change the array to store final price after applying offer
let items=[85,97,44,37,76,60];
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
    items[i]=items[i]-offer;
    console.log(items[i]);

}