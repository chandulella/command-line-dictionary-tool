const commandHelper = require("./../helpers/command.js");
const error = require("./../constant/error.js");
const printer = require("./../constant/output.js");

const self = (module.exports = {
  definitions: async word => {
    try {
      let def = await commandHelper.definitions(word);
      await self.makeDefinitions(def);
    } catch (err) {
      console.log(err);
    }
  },
  synonyms: async word => {
    try {
      let syn = await commandHelper.synonyms(word);
      printer.headLine('Synonyms') 
      printer.printSynonyms(syn);
    } catch (err) {
      console.log(err);
    }
  },
  antonyms: async word => {
    try {
      let ant = await commandHelper.antonyms(word);
      printer.headLine('Antonyms');
      printer.printAntonyms(ant);
    } catch (err) {
      console.log(err);
    }
  },
  examples: async word => {
    try {
      let ex = await commandHelper.examples(word);
      printer.headLine('Examples');
      printer.printExamples(ex);
    } catch (err) {
      console.log(err);
    }
  },
  fullDetails: async word => {
    try {
      await self.definitions(word);
      await self.synonyms(word);
      await self.antonyms(word);
      await self.examples(word);
    } catch (err) {
      console.log(err);
    }
  },
  wordOfTheDay: async () => {
    try {
      let word = await commandHelper.wordOfTheDay();
      console.log(`
----------------------------------------------------
Word Of The Day is :- ${word}         
            `)
      await self.fullDetails(word);
    } catch (err) {
      console.log(err);
    }
  },

  makeDefinitions: (data) => {
    printer.headLine('Definition')  
    printer.printDefinitions(data);
  },

  fetchGamePlayDetails : async(game) => {
    let randomWord = await commandHelper.fetchrandomWord();
    let def = await commandHelper.definitions(randomWord);
    let syn = await commandHelper.synonyms(randomWord);
    let ant = await commandHelper.antonyms(randomWord);
    let finalResult = await commandHelper.matchFinalResult(def,syn,ant);

    if(finalResult.definitions.length > 1 ) {
      game.word = randomWord;
      game.definitions = finalResult.definitions;
      game.synonyms = finalResult.synonyms;
      game.antonyms = finalResult.antonyms;
    } else {
      await self.fetchGamePlayDetails(game);
    }

  }
  
});
