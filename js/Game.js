/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        let phraseArray = [];
        phraseArray.push(new Phrase('Im gonna make him an offer he cant refuse'));
        phraseArray.push(new Phrase('Rosebud'));
        phraseArray.push(new Phrase('May the force be with you'));
        phraseArray.push(new Phrase('Ill be back'));
        phraseArray.push(new Phrase('Heres Johnny'));
        phraseArray.push(new Phrase('My precious'));
        phraseArray.push(new Phrase('Open the pod bay doors please hal'));
        return phraseArray;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomNum = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[randomNum];
    };

    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        const selectedPhrase = this.getRandomPhrase();
        selectedPhrase.addPhraseToDisplay();
        this.activePhrase = selectedPhrase;
    };

    /**
     * Handles interaction of submitting letters
     * @param {button} button - The keyup or clicked letter
     */

    handleInteraction(button) {
        const letter = button.innerHTML;
        
        if (!button.disabled) {
            if (this.activePhrase.checkLetter(letter)) {
                this.activePhrase.showMatchedLetter(letter);
                button.classList.add('chosen');
                button.disabled = true;
                if (this.checkForWin()) {
                    this.gameOver(true);
                }
            } else {
                button.classList.add('wrong');
                button.disabled = true;
                this.removeLife();
            }
        }
    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const letters = document.querySelectorAll('.letter');
        for (let i = 0; i < letters.length; i++) {
            if (letters[i].classList.contains('hide')) {
                return false;
            }
        }
        return true;
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const lives = document.querySelectorAll('img');
        lives[this.missed].setAttribute('src', 'images/lostHeart.png');
        this.missed += 1;
        if (this.missed === lives.length) {
            this.gameOver(false);
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        let message = '';
        if (gameWon) {
            overlay.style.backgroundColor = 'green';
            message = 'Great Job!';
        } else {
            overlay.style.backgroundColor = 'red';
            message = 'Sorry, better luck next time.';
        }
        this.resetGame();
        const gameOverMessage = document.getElementById('game-over-message');
        gameOverMessage.innerText = message;
        overlay.style.display = '';
        
    };

    /**
     * Resets game state
     */
    resetGame() {
        const phraseDiv = document.getElementById('phrase');
        phraseDiv.innerHTML = '';
        const letters = document.querySelectorAll('.key');
        for (let i = 0; i < letters.length; i++) {
            letters[i].className = '';
            letters[i].classList.add('key');
            letters[i].disabled = false;
        }
        const lives = document.querySelectorAll('img');
        for (let i = 0; i < lives.length; i++) {
            lives[i].setAttribute('src', 'images/liveHeart.png');
        }
        this.missed = 0;
        this.activePhrase = null;
    }
 }