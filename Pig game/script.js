'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');

const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');

dice.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

let CurrentScore = 0;
const score = [0, 0];
let activePlayer = 0;

let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  CurrentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//console.log(score0El);

btnRoll.addEventListener('click', function () {
  if (playing) {
    //dice.classList.remove('hidden');

    const rand = Math.trunc(Math.random() * 6) + 1;
    //score0El.textContent = rand;

    dice.classList.remove('hidden');
    dice.src = `dice-${rand}.png`;

    if (rand != 1) {
      CurrentScore += rand;
      // currentScore0El.textContent = CurrentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        CurrentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    score[activePlayer] += CurrentScore;
    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      dice.classList.add('hidden');
    } else {
      document.getElementById(`score--${activePlayer}`).textContent =
        score[activePlayer];
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;

  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  CurrentScore = 0;
  score[0] = 0;
  score[1] = 0;
  console.log(CurrentScore, score);

  document.getElementById(`current--${activePlayer}`).textContent = 0;
});
