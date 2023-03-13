// Scores for Home
let homeScore = document.getElementById('home-score');
let homeScoreNum = Number(homeScore.textContent);


document.getElementById('score-home-one')
    .addEventListener('click', () => {
        homeScoreNum++;

        homeScore.textContent = homeScoreNum;
    });

document.getElementById('score-home-two')
    .addEventListener('click', () => {
        homeScoreNum += 2;

        homeScore.textContent = homeScoreNum;
    });

document.getElementById('score-home-three')
    .addEventListener('click', () => {
        homeScoreNum += 3;

        homeScore.textContent = homeScoreNum;
    });

// Scores for Guest
let guestScore = document.getElementById('guest-score');
let guestScoreNum = Number(guestScore.textContent);

document.getElementById('score-guest-one')
    .addEventListener('click', () => {
        guestScoreNum++;

        guestScore.textContent = guestScoreNum;
    });

document.getElementById('score-guest-two')
    .addEventListener('click', () => {
        guestScoreNum += 2;

        guestScore.textContent = guestScoreNum;
    });

document.getElementById('score-guest-three')
    .addEventListener('click', () => {
        guestScoreNum += 3;

        guestScore.textContent = guestScoreNum;
    });