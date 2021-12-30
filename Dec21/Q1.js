//Take 3 inputs from the user and show minimum of the three.
var num1 = prompt("enter the num1");
var num2 = prompt("enter the num2");
var num3 = prompt("enter the num3");

 if (num1 < num2 && num1 < num3) {
    alert(num1);
   } else if (num2 < num1 && num2 < num3) {
   alert(num2);
   }
   else {
     alert(num3);
}
 
  