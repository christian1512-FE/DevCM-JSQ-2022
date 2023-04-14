var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
highScores.sort(function(a, b) {
    return b.score - a.score;

});

var highScoreList = document.getElementById("highScoreList");
highScores.forEach(score => {
    var li = document.createElement("li");
    li.textContent = score.initials + ": " + score.score;
    highScoreList.appendChild(li);
});

var clearHs = document.getElementById("clearHS");
clearHs.addEventListener("click", function() { 
    localStorage.removeItem("highScores");
    highScoreList.innerHTML = "";
    clearHs.style.display = "none";

});
