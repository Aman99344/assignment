/*create an array using .push with prompt and also using parseInt();
-> Take three numbers and find max. (Using arrays)
-> Math.max(); //For further reading.
*/

 var arr = [];

var i = prompt("Enter the number");
var i = parseInt(i);
arr.push(i);

var j = prompt("Enter the number");
var j = parseInt(j);
arr.push(j);

var k = prompt("Enter the number");
var k = parseInt(k);
arr.push(k);
/*
if(i > j && i > k) {
alert(i);
}
else if(j > i && j > k) {
alert(j);
} else {
alert(k);
}
*/

console.log(Math.max (i, j, k));



