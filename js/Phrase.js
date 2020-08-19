/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const phraseDiv = document.getElementById('phrase');
        let html = '<ul>';
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] !== ' ') {
                html += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>\n`
            } else {
                html += '<li class="hide space"> </li>\n';
            }
        }
        html += '</ul>';
        phraseDiv.innerHTML = html;
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const li = document.querySelectorAll('#phrase ul li');
        for (let i = 0; i < li.length; i++) {
            if (li[i].classList.contains(letter)) {
                li[i].classList.replace('hide', 'show');
            }
        }
    };
}