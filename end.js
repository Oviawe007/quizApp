const username = document.getElementById("username");

const button = document.getElementsByTagName('button');

const saveScoreBtn = document.getElementById('saveScoreBtn');

const finalscore = document.getElementById('finalScore');

const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//console.log(highScores)

finalscore.innerText = mostRecentScore;


username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;

}); 

button.onclick= function saveHighScore(e){
    console.log("save botton clicked");
    e.preventDefault();
    
    const score = {
        score:mostRecentScore,
        name : username.value
    };
    highScores.push(score)
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/index.html');
    console.log(highScores) 

}

//localStorage.clear();
