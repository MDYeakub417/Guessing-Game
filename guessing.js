var numberofwon=0;
var numberoflost=0;

for(var x=1;x<=5;x=x+1){

    var guessnumber=parseInt(prompt("Enter a number from 1 to 5 : "));

var randomnumber=Math.floor(Math.random()*5)+1;

if (guessnumber==randomnumber){
    document.write("You have won"+"<br/>");
    numberofwon++;
}

else{
    document.write("You have lost. The random number is " + randomnumber +"<br/>");
    numberoflost++;
}

}

document.write("Total number of win is= " + numberofwon +"<br/>");
document.write("Total number of lost is= " + numberoflost );