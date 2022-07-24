function updateslider() 
{
    var rating = document.getElementById("interest").value;
    document.getElementById("rate").innerText = rating+"%";
}

function compute()
{

if(document.getElementById("amount").value=="" || document.getElementById("amount").value<0)
    alert("Please Enter Valid Input");

else
{
var principal = document.getElementById("amount").value;
var roi = document.getElementById("interest").value;
var noy = document.getElementById("years").value;
//interest calculation
var interest = (principal * roi * noy) / 100;
//calculating the year which the customer 
//will get the interest
var int_year = new Date().getFullYear() + parseInt(noy);
var NetAmt = parseFloat(principal)+parseFloat(interest);
document.getElementById("result").innerHTML = "<br>If you deposit &#8377;" + principal + ",at an interest rate of "
 + roi + "% You will receive interest &#8377;"+ interest +" and the total amount &#8377;"+ NetAmt + ",in the year " +  int_year+ "<br>"
}
}
function resetSlider()
{
    document.getElementById("rate").innerText = "10.25%";
    document.getElementById("result").innerHTML="<br><br><br><br>";
}

