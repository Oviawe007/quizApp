const highScoreList = document.getElementById('highScoreList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//console.log(highScores)

highScoreList.innerHTML = highScores.map((highScore) => {
    return `<ul class="high-score">${highScore.name} - ${highScore.score}</ul>`;
}).join("");