score =  localStorage.getItem("score");


function check1(){
document.getElementById("r").innerHTML = "correct";
score = parseInt(score) + parseInt(1)
localStorage.setItem("score", score);
document.getElementById("bb").style.visibility = "hidden";
document.getElementById("N").style.visibility = "visible";
}

function check2(){
document.getElementById("r").innerHTML = "wrong";
localStorage.setItem("score", score);
document.getElementById("bb").style.visibility = "hidden";
document.getElementById("N").style.visibility = "visible";
}

function check3(){
document.getElementById("r").innerHTML = "wrong";
localStorage.setItem("score", score);
document.getElementById("bb").style.visibility = "hidden";
document.getElementById("N").style.visibility = "visible";
}

function NN(){
window.location = "end.html";
}