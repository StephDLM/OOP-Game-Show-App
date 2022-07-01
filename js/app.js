/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//verify that the code is working properly in step 2
    // const phrase = new Phrase(); 
    // const game = new Game();

//verify that the code is working properly in step 3
    // const phrase = new Phrase('Life is like a box of chocolates'); 
    //     console.log(`Phrase - phrase: ${phrase.phrase}`);

//verify that the code is working properly in step 4
    // const game = new Game(); 
    // game.phrases.forEach((phrase, index) => { 
    //     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
    // });

//verify that the code is working properly in step 5: to get the random phrase
    // const logPhrase = (phrase) => { 
    //     console.log(`Phrase - phrase: `, phrase.phrase); 
    //     }; 
    //     const game = new Game(); 
    //     logPhrase(game.getRandomPhrase()); 
    //     logPhrase(game.getRandomPhrase()); 
    //     logPhrase(game.getRandomPhrase()); 
    //     logPhrase(game.getRandomPhrase()); 
    //     logPhrase(game.getRandomPhrase());
    
//testing addPhraseToDisplay()
    // const game = new Game(); 
    // const randomPhrase = game.getRandomPhrase(); 
    // const phrase = new Phrase(randomPhrase.phrase); 
    // phrase.addPhraseToDisplay();

//testing startGame() method:
    // const game = new Game(); 
    // game.startGame(); 
    // console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

//Start Game Event Listener
var game;
const startButton = document.getElementById("btn__reset");
startButton.addEventListener( "click", () => {
    game = new Game;    //use game variable to instantiate a new Game object
    game.startGame(); //call the startGame method with new game to start

});

const qwerty = document.getElementById("qwerty");

qwerty.addEventListener( "click", (e) => {
    if (e.target.tagName === "BUTTON") {
        game.handleInteraction(e.target);
    }
    console.log(e.target)
}

    // e.target.tagName === "BUTTON"       
);


