var score = 0
function update_score(){
    score = score + 1
    console.log(score)
    localStorage.setItem("score", score)
}
function save_score(){
    localStorage.setItem("score", score)
}
function next(){
    window.location = "activity_2.html"
}