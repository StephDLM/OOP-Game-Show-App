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
      };
//create a method to select random phrase from phrases property
    getRandomPhrase() {
        const selectedPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[selectedPhrase];
    };
//create a method that hides screed overlay
    startGame(){
        const startOverlay = document.getElementById("overlay");
        startOverlay.style.display = "none";
        this.activePhrase = new Phrase(this.getRandomPhrase().phrase);//call getRandomPhrase() by storing it in this.activePhrase 
        this.activePhrase.addPhraseToDisplay(); //add phrase to the gameboard
    };
   //check for winning move @return {boolean} True if game has been won, false if game wasn't won 
    checkForWin(){
    //select the class hide 
        const hidden = document.querySelectorAll(".hide");
        console.log(hidden);
        console.log(hidden.length);
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
                this.missed += 1;
//when when 5 or more hearts are lost, game over
            } else if (this.missed === 4) {
                this.gameOver(false);
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
            endOverlay.className = ("win");
        } else if (gameWon === false){
            document.getElementById("game-over-message").innerHTML = "That's not quite right, play again!";
            endOverlay.className = ("lose");
        }
    };
    handleInteraction(button){
        button.disabled = true;
        // const click = button.target
        let key = button.innerText;
    //disable button once clicked
    //create a method to activate the clicked button to check if chosen letter matches phrase
    if (this.activePhrase.checkLetter(key) === true){
        this.activePhrase.showMatchedLetter(key);
        button.classList.add("chosen");
        if (this.checkForWin() === true ){ 
            this.gameOver(true) 
        }
        } else {
            button.classList.add("wrong");
            this.removeLife();
        }
    };
    resetGame(){
        let buttons = document.querySelectorAll(".key")//select the class "key"
        // let phrase = document.getElementById("phrase"); //select the phrase given
        // let ul = document.querySelectorAll("ul");
    //reset all heart images by using a forEach loop
    //foreach loop to enable all onscreen buttons and update all to use the "key" css class
     //removing the "li" elements using the chosen and wrong keys 

    buttons.forEach(button => {
        button.classList.remove("chosen");
        button.classList.remove("wrong");
        button.classList.add("key");
        button.disabled = false;
    })
    console.log(buttons);
    const images = document.querySelectorAll("img");
    images.forEach (heart =>
        heart.src = "images/liveHeart.png"
        );
    };
};




