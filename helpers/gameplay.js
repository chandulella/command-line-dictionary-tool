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
    } ,

    displayHintDefinition:(definitions, word) => {
        if(definitions.length > 1) {
            let displayDef = self.getRandomValue(definitions);
            printer.displayHint('Definition',displayDef);
        } else {
            self.displayHintJumbleWord(word);
        }
    },
    displayHintSynonym:(synonyms, word) => {
        if(synonyms.length > 1) {
            let displaySyn = self.getRandomValue(synonyms);
            printer.displayHint('Synonyms',displaySyn);
        } else {
            self.displayHintJumbleWord(word);
        }
    },
    displayHintAntonym:(antonyms, word) => {
        if(antonyms.length > 1) {
            let displayAnt = self.getRandomValue(antonyms);
            printer.displayHint('Antonym',displayAnt);
        } else {
            self.displayHintJumbleWord(word);
        }
    },
    displayHintJumbleWord:(word) => {
        let displayJumbleWord = self.getJumbleWord(word)
        printer.displayHint('Jumbled Word',displayJumbleWord);
    },
    getRandomValue : (arr) => {
        return arr[Math.floor(Math.random() * (arr.length-1)) + 1];
    },
    getJumbleWord : (word) => {
        return word
    }
}