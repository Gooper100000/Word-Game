function get_score(){
score = localStorage.getItem("score")
document.getElementById("score").innerHTML = score
}
function back(){
    window.location = "activity_1.html"
}