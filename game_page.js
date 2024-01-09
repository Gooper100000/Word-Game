player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")
player1_score = 0
player2_score = 0
word = ""
document.getElementById("player1name").innerHTML = player1_name
document.getElementById("player2name").innerHTML = player2_name
document.getElementById("player1score").innerHTML = player1_score
document.getElementById("player2score").innerHTML = player2_score
document.getElementById("playerquestion").innerHTML = "questionturn = " + player1_name
document.getElementById("playeranswer").innerHTML = "answerturn = " + player2_name

function send(){
    get_word = document.getElementById("word").value
    word = get_word.toLowerCase()
    charat1 = word.charAt(1)
    length_divideto = Math.floor(word.length/2)
    charat2 = word.charAt(length_divideto)
    length_minus1 = word.length-1
    charat3 = word.charAt(length_minus1)
    removecharat1 = word.replace(charat1,"_")
    removecharat2 = removecharat1.replace(charat2,"_")
    removecharat3 = removecharat2.replace(charat3,"_")
    questionword = "<h4 id= 'word_display'> q."+ removecharat3+ "</h4>"
    inputbox = "<br> answer:<input id= 'inputcheckbox'>"
    checkbox = "<br> <br> <button onclick='check()'> check </button>"
    row = questionword + inputbox + checkbox
    document.getElementById("output").innerHTML = row
}
questionturn = "player1"
answerturn = "player2"
function check(){
get_answer = document.getElementById("inputcheckbox").value
answer = get_answer.toLowerCase()
if (word == answer){
if (answerturn == "player1") {
    player1_score = player1_score + 1
    document.getElementById("player1score").innerHTML = player1_score
} else {
    player2_score = player2_score + 1
    document.getElementById("player2score").innerHTML = player2_score
}
}
if (questionturn == "player1") {
    questionturn = "player2"
    document.getElementById("playerquestion").innerHTML = "questionturn = " + player2_name
} else {
    questionturn = "player1"
    document.getElementById("playerquestion").innerHTML = "questionturn = " + player1_name
}
if (answerturn == "player1") {
    answerturn = "player2"
    document.getElementById("playeranswer").innerHTML = "answerturn = " + player2_name
} else {
    answerturn = "player1"
    document.getElementById("playeranswer").innerHTML = "answerturn = " + player1_name
}
document.getElementById("output").innerHTML = ""
}
