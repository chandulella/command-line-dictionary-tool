module.exports = function(input,game) {
  input = input.split(" ");
  let name = input[0];
  let type = input[1] ? input[1] : null;
  let word = input[2] ? input[2] : null;

  if (input.length === 1) {
    console.log("word of the day")
} else {
    switch (type) {
      case "def":
        console.log("definition")
        break;
      case "syn":
        console.log("synonym")
        break;
      case "ant":
        console.log("antonym")
        break;
      case "ex":
        console.log("example")
        break;
      case "dict":
        console.log("full dictionary")
        break;
      case "play":
        console.log("play")
        break;
      default:
        console.log("full dictionary")
    }
  }
};
