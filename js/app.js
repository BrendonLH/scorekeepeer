'use strict';

//global variable selectors
var player1 = document.querySelector('#p1');
var player1Score = [];
var p1Display = document.querySelector('#p1display');
var player2 = document.querySelector('#p2');
var player2Score = [];
var p2Display = document.querySelector('#p2display');
var reset = document.querySelector('#reset');
var h1 = document.querySelector('h1');
var gameOver = false;
var winningScore = 5;
var winningScoreDisplay = document.querySelector('#roundsdisplay');
var numInput = document.querySelector('input');
var paragraph;

// event listeners
player1.addEventListener('click', function(){
  if(!gameOver){
    player1Score ++;
    if(player1Score === winningScore){
      p1Display.classList.add('winner');
      gameOver = true;
    }
    p1Display.textContent = player1Score;
  }
});

player2.addEventListener('click', function(){
  if(!gameOver){
    player2Score ++;
    if(player2Score === winningScore) {
      p2Display.classList.add('winner');
      gameOver = true;
    }
    p2Display.textContent = player2Score;
  }
});

reset.addEventListener('click', function(){
  resetGame();
});
function resetGame(){
  player1Score = 0;
  p1Display.textContent = 0;
  player2Score = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('winner');
  p2Display.classList.remove('winner');
  gameOver = false;
}

numInput.addEventListener('change', function(){
  winningScoreDisplay.textContent = (numInput.value);
  winningScore = Number(numInput.value);
  resetGame();
});
// functions