let homeNum = 0;
let guestNum = 0;

let btns = document.querySelectorAll('.scores')
    .forEach(el => {
        el.addEventListener('click', (e) => {
            let numEl = Number(e.target.textContent);
            let homeScore = e.target.parentElement.children[1];
            let guestScore = e.target.parentElement.children[1];

            if (homeScore.id == 'home-score') {
                if (numEl == 1) {
                    homeNum++;
                } else if (numEl == 2) {
                    homeNum += 2;
                } else if (numEl == 3) {
                    homeNum += 3;
                }
                homeScore.textContent = homeNum;
            }

            if (guestScore.id == 'guest-score') {
                if (numEl == 1) {
                    guestNum++;
                } else if (numEl == 2) {
                    guestNum += 2;
                } else if (numEl == 3) {
                    guestNum += 3;
                }
                guestScore.textContent = guestNum;
            }

        });
    });

// Scores for Home
// let homeScore = document.getElementById('home-score');
// let homeScoreNum = Number(homeScore.textContent);

// document.getElementById('score-home-one')
//     .addEventListener('click', () => {
//         homeScoreNum++;

//         homeScore.textContent = homeScoreNum;
//     });

// document.getElementById('score-home-two')
//     .addEventListener('click', () => {
//         homeScoreNum += 2;

//         homeScore.textContent = homeScoreNum;
//     });

// document.getElementById('score-home-three')
//     .addEventListener('click', () => {
//         homeScoreNum += 3;

//         homeScore.textContent = homeScoreNum;
//     });

// // Scores for Guest
// let guestScore = document.getElementById('guest-score');
// let guestScoreNum = Number(guestScore.textContent);

// document.getElementById('score-guest-one')
//     .addEventListener('click', () => {
//         guestScoreNum++;

//         guestScore.textContent = guestScoreNum;
//     });

// document.getElementById('score-guest-two')
//     .addEventListener('click', () => {
//         guestScoreNum += 2;

//         guestScore.textContent = guestScoreNum;
//     });

// document.getElementById('score-guest-three')
//     .addEventListener('click', () => {
//         guestScoreNum += 3;

//         guestScore.textContent = guestScoreNum;
//     });

