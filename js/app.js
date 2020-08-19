/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameBtn = document.getElementById('btn__reset');
const qwerty = document.getElementById('qwerty');
const overlay = document.getElementById('overlay');
let game;

/**
 * Event Listener to start game or new game
 */
startGameBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

/**
 * Event Listener for clicking on querty keyboard
 */
qwerty.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        game.handleInteraction(e.target);
    }
});

/**
 * Event Listener for using keyboard 
 */
document.addEventListener('keyup', (e) => {
    if (overlay.style.display === 'none') {
    const onscreenKeys = document.querySelectorAll('.key');
    const regex = /[a-zA-Z]/;
    for (let i = 0; i < onscreenKeys.length; i++) {
        if (onscreenKeys[i].innerText === e.key) {
            game.handleInteraction(onscreenKeys[i]);
        }
    }}
});




