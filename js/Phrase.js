/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
       this.phrase = phrase.toLowerCase();//representing actual phrase
    }

    //display phrase on game board
    addPhraseToDisplay (){
        let phraseAttempt = document.getElementById("phrase"); //select the phrase given
        let ul = phraseAttempt.querySelector("ul"); //select the ul in the html to hide characters
        //use a for loop to loop around each letter attempt
        for (let i=0; i<this.phrase.length; i++){
        //if then statement to check if the phrase is not equal to a letter, then it hides it 
            if (this.phrase[i] !== " "){ 
                ul.innerHTML = `<li class="hide letter">${this.phrase[i]}</li>`
            } else {
                ul.innerHTML = `<li class="space">${this.phrase[i]}</li>`
            } 
        }
        return this.phrase;
    };
    checkLetter(letter){
        if (this.phrase.match(letter)){
            return true;
        } else {
            return false;
        };
    };
    showMatchedLetter(letter){
        //select all of the letter DOM elements that have a CSS class name that match the selected letter
        let revealLetter = document.querySelectorAll("#phrase ul");
    
    };
};

