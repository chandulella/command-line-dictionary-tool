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
    }
}