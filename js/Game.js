/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//create game class without any parameters that holds missed letters, the phrases available, and the current phrase
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("I love the summer solstice"),
            new Phrase("Not great at hiking in elevation"),
            new Phrase("My goals are limitless"),
            new Phrase("tis a brumal night"),
            new Phrase("Fall equinox is a great cocktail")
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
   //check for winning move @return {boolean} True if game has been won, false if game wasn't won 
    checkForWin(){
    //select the class hide 
        const hidden = document.querySelector(".hide");
        if (hidden.length === 0){
            return true
        } else {
            return false
        }
    };
//Increase value of the missed property and removes a life from the scoreboard 
//check if player has remaining life and ends game if player is out 
    removeLife(){
//select all images and store it in images
        const images = document.querySelectorAll("img");
//create if then statement to replace liveHeart with lostHeart when player misses, up to 4 times
            if (this.missed < 4){ 
                images[this.missed].src = "images/lostHeart.png";
//when a letter is missed, add 1 (all the way up to 4)
                this.missed += 1
            } else {
                this.gameOver();
            }
    };

/**
 * Displays game over message
 * @param {boolean} gameWon - Whether or not the user won the game
 */
    gameOver(gameWon){
        const endOverlay = document.getElementById("overlay");
        endOverlay.style.display = "block";        
    //create an if-else statement that shows if the player got the letters right, show "you won", or "you lost"
        if (gameWon === true){
            document.getElementById("game-over-message").innerHTML = "Congratulations, you've won!";
            endOverlay.className = "win";
        } else if (gameWon === false){
            document.getElementById("game-over-message").innerHTML = "That's not quite right, play again!";
            endOverlay.className = "loose";

        }
};
    handleInteraction(){};
};

