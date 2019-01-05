const GameplayHelper = require("./../helpers/gameplay.js");
const Command = require("./../controllers/command.js");
const printer = require("./../constant/output.js");

const self = module.exports = {

    displayQuestion : async(game,time ='')=>{
        GameplayHelper.setGameplayAnswerMode(game);
        await Command.fetchGamePlayDetails(game);
        GameplayHelper.displayQuestion(game , time)
        console.log(game.word)
    },
    checkRoute : async (input,game) => {
        if(game.answer_status) {
            if(game.word === input) {
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
                    console.log('hint')
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
    }
}