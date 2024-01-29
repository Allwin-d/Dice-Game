'use strict';
//intializing values to zero
const player0e1 = document.querySelector('.player--0');
const player1e2 = document.querySelector('.player--1');
const current0e0 = document.getElementById('current--0');
const current1e1 = document.getElementById('current--1');
const score0el0 = document.getElementById('score--0');
const score1el1 = document.getElementById('score--1');
const rolldice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newgame = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');

let currentScore, playing, activeplayer, score;

//initializing values to 0
const init = function () {
  score = [0, 0];
  currentScore = 0;
  activeplayer = 0;
  playing = true;

  current0e0.textContent = 0;
  current1e1.textContent = 0;
  score0el0.textContent = 0;
  score1el1.textContent = 0;

  diceEl.classList.add('hidden');
  player0e1.classList.remove('player--winner');
  player1e2.classList.remove('player--winner');

  player0e1.classList.add('player--active');
  player1e2.classList.remove('player--active');
};

//calling default setting INIT to make everything to 0
init();

//function for switch player
const switchPlayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  player0e1.classList.toggle('player--active');
  player1e2.classList.toggle('player--active');
};

//adding functionality for RollDice button
rolldice.addEventListener('click', function () {
  if (playing) {
    //generating dice values randomly
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);

    //displaying dice
    diceEl.classList.remove('hidden');

    //storing dice values to currentScore box
    if (dice !== 1) {
      diceEl.src = `dice-${dice}.png`;
      currentScore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//adding functionality for hold button
hold.addEventListener('click', function () {
  if (playing) {
    score[activeplayer] += currentScore;
    document.getElementById(`score--${activeplayer}`).textContent =
      score[activeplayer];

    //winner
    if (score[activeplayer] >= 50) {
      playing = false;
      console.log(score[activeplayer]);
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

//adding functionalities to NEW GAME button
newgame.addEventListener('click', init);
