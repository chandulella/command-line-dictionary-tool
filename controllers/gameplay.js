const GameplayHelper = require("./../helpers/gameplay.js");
const Command = require("./../controllers/command.js");
const printer = require("./../constant/output.js");

const self = module.exports = {
    
    displayQuestion : async(game,time ='')=>{
        GameplayHelper.setGameplayAnswerMode(game);
        await Command.fetchGamePlayDetails(game);
        GameplayHelper.displayQuestion(game , time)
        // console.log("For Testing Purpose,Answer listed as below  : ",game.word,game.synonyms)
    },
    checkRoute : async (input,game) => {
        if(game.answer_status) {
            let answer = GameplayHelper.checkAnswer(input,game)
            if(answer) {
                printer.correctAnswer();
                self.displayQuestion(game,'repeated');
            } else {
                printer.wrongAnswer();
                GameplayHelper.setGameplayOptionMode(game);
            }
        } else if(game.option_status) {
            switch (input) {
                case '1' :
                    GameplayHelper.setGameplayAnswerMode(game);
                    console.log(`Please Retry Once more with correct Answer : 
                    `)
                    break;
                case '2' :
                    GameplayHelper.setGameplayAnswerMode(game);
                    self.checkHintRoute(game);
                    break;
                case '3' :
                    GameplayHelper.setGameplayQuitMode(game);
                    printer.printGameOutput(game);
                    printer.gameEnded();
                    break;
                default :
                    console.log('sorry pls choose between 1 or 2 or 3')

            }

        }
    },

    checkHintRoute : (game) => {
        let randomNumber = Math.floor(Math.random() * 4) + 1;
        let word = game.word;
        switch(randomNumber) {
            case 1 :
                let definitions = game.definitions;
                GameplayHelper.displayHintDefinition(definitions, word);
                break;
            case 2 :
                let synonyms = game.synonyms;
                GameplayHelper.displayHintSynonym(synonyms, word);
                break;
            case 3 :
                let antonyms = game.antonyms;
                GameplayHelper.displayHintAntonym(antonyms, word);
                break;
            case 4 :
                GameplayHelper.displayHintJumbleWord(word);
                break;
        }
        
    }
}