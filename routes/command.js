let Command = require("./../controllers/command.js");
let error = require("./../constant/error.js");

module.exports = function(input,game) {
  input = input.split(" ");
  let name = input[0];
  let type = input[1] ? input[1] : null;
  let word = input[2] ? input[2] : null;

  if (input.length === 1) {
    Command.wordOfTheDay();
  } else {
    switch (type) {
      case "def":
        Command.definitions(word);
        break;
      case "syn":
        Command.synonyms(word);
        break;
      case "ant":
        Command.antonyms(word);
        break;
      case "ex":
        Command.examples(word);
        break;
      case "dict":
        Command.fullDetails(word);
        break;
      case "play":
        console.log("play")
        break;
      default:
      if(input.length === 2){
        Command.fullDetails(input[1]);
      } else {
        console.log(error.printCorrectInput);
      }
    }
  }
};
