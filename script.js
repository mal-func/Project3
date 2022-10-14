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

    document.getElementById("result").innerHTML="Result<br><br>If you deposit &#8377 <mark>"+principal+"\</mark><br\>at an interest rate of <mark>"+rate+"</mark> <br\>You will receive an amount of <mark>"+amount+"</mark>\<br\>in the year <mark>"+year+"</mark>\<br\>";
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate_val").value;
    document.getElementById("rate_res").innerText=rateval;
}



let clk = document.querySelector(".submit")
clk.addEventListener('click', (e) => {
    e.preventDefault();
    compute();
})

let btn = document.querySelector('#my-form')
btn.addEventListener('mouseover', (e) => {
    document.querySelector("#my-form").style.background = "#ccc"
})
btn.addEventListener('mouseout', (e) => {
    document.querySelector("#my-form").style.background = "#f4f4f4"
})

