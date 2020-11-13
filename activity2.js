function back(){
    window.location = "activity_1.html";
}
function getScore(){
    document.getElementById("update").innerHTML="<h1> Score : "+ localStorage.getItem("score") + "</h1>"
}