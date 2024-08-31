let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
let myCreatedDate = new Date("01-14-2023");
let myTimeStamp = Date.now();
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

