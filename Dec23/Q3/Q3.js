
//Write a program to take an input from the user (num) and check //whether it is a prime number or not.


var num = prompt("Please enter the number");
 
 var isPrimeNumber= true;

    for(i = 2; i < num; i = i + 1)
    {

   if(num % i == 0) {

   isPrimeNumber= false;
     
    
 }
 }
   if(isPrimeNumber == true){
       alert((num) + "is a prime");

} else {
    alert((num) + "is not prime");

}