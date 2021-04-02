function ageCal(){
var bornYear=document.getElementById("bornYear");
var ageDiv=document.getElementById("ageDiv");
var date=new Date();
var year=date.getFullYear();
ageDiv.innerHTML=`<p><b>You are ${year-bornYear.value} years old</b></p>`
}