/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const button = document.getElementById('btn__reset');
let game;

button.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});


