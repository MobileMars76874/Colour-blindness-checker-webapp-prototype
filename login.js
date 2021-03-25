function start(){
client = document.getElementById("n").value;
localStorage.setItem("Client", client);
localStorage.setItem("score", 0);

window.location = "1.html";
}