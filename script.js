function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal < 1){
        alert("Please enter a positive number");
        document.getElementById("principal").focus()
    }
    else{
        var rate = document.getElementById("rate_val").value;
    var years = document.getElementById("years").value;
    var interest  = (principal*rate*years) /100;
    var amount = Number(principal)+ Number(interest);
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="<br>If you deposit <mark>"+principal+"\</mark><br\>at an interest rate of <mark>"+rate+"</mark><br\>You will receive an amount of <mark>"+amount+"</mark>\<br\>in the year <mark>"+year+"</mark>\<br\>";
    }
    
      

function updateRate()
{
    var rateval = document.getElementById("rate_val").value;
    document.getElementById("rate_res").innerText=rateval;
}