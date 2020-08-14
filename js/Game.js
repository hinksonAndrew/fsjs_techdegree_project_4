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
        phraseArray.push(new Phrase('Life is like a box of chocolates'));
        phraseArray.push(new Phrase('There is no trying'));
        phraseArray.push(new Phrase('May the force be with you'));
        phraseArray.push(new Phrase('You have to see the Matrix for yourself'));
        phraseArray.push(new Phrase('You talking to me'));
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

    handleInteraction() {

    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {

    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {

    };
 }