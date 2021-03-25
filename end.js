score = localStorage.getItem("score");
document.getElementById("ss").innerHTML = "You got "+score+" out of 5";

if(score <=2){
document.getElementById("p_f").innerHTML = "You falied"
}
else{
document.getElementById("p_f").innerHTML = "You passed";
}

function r(){
window.location = "login.html";
}

