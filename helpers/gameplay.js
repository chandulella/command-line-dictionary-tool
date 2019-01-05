const printer = require("./../constant/output.js");

const self = module.exports = {
    setGameplayAnswerMode : (game) => {
        game.started = true,
        game.answer_status = true,
        game.option_status = false
    },
    setGameplayOptionMode : (game) => {
        game.started = true,
        game.answer_status = false,
        game.option_status = true
    },
    setGameplayQuitMode : (game) => {
        game.started = false,
        game.answer_status = false,
        game.option_status = false
    },

    displayQuestion :(game, time) => {
        if(time === 'repeated') {
            console.log(`Your Next Question is : `)
        } else {
            console.log(`Your Question is : `)
        }
        const def = game.definitions[0];
        const syn = game.synonyms[0] ? game.synonyms[0] : null;
        printer.displayQuestion(def,syn);
    }    
}