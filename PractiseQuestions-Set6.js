//Create an array to store companies- "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// c.Add Amazon at the end
let Companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(Companies);
// a.Remove the first comapany from the array
Companies.shift();
console.log(Companies);
// b.Remove  Uber and add Ola in its place
Companies.splice(1,1,"Ola");
console.log(Companies);
// c.Add Amazon at the end
Companies.push("Amazon");
console.log(Companies);