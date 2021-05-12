function compute()
{
     var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
     var years = document.getElementById("years").value;
     var intrest = principal * years * rate / 100;
     var year = new Date().getFullYear()+parseInt(years);

if (principal=="0" || principal==""||principal<"0") {
   window.alert("enter a positive number and more than 0 and not blanck");
document.getElementById("principal").focus();

  } 
 
else 
{

document.getElementById("result").innerHTML ="   if you deposit"+"<mark>"+principal+"</mark>"+"</br>"+"at an intrest rate  "+"<mark>"+rate+"&percnt;"+"</mark>"+"</br>"+"you will recive an amount of  "+"<mark>"+intrest+"</mark>"+"</br>"+"in the year of  "+"<mark>"+year+"</mark>";
}
 

}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

