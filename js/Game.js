/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//create game class without any parameters that holds missed letters, the phrases available, and the current phrase
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("solstice"),
            new Phrase("elevation"),
            new Phrase("limitless"),
            new Phrase("brumal"),
            new Phrase("equinox")
        ];
        this.activePhrase = "null";
      }
//create a method to select random phrase from phrases property
    getRandomPhrase() {
        const selectedPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[selectedPhrase];
    }
//create a method that hides screed overlay
    startGame(){
        const startOverlay = document.getElementById("overlay");
        startOverlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();//call getRandomPhrase() by storing it in this.activePhrase 
        this.activePhrase.addPhraseToDisplay(); //add phrase to the gameboard
    };
};