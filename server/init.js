require('dotenv').config();
require("./../constant/help.js");

let error = require("./../constant/error.js");
let Gameplay = require("./../controllers/gameplay.js");

let game = {
    started : false,
    answer_status : false,
    option_status : false,
    word : ''
};

process.stdin.setEncoding('utf8');
process.stdin.on("data", input => {
    fetchResult(input.trim());
});

function fetchResult(input) {
    let checked = checkEnteredInput(input);
    if(!game.started) {
        checked && require('./../routes/command.js')(input,game);
        checked || console.log(error.printCorrectInput);
    } else {
        Gameplay.checkRoute(input,game);
    }

}

function checkEnteredInput(input) {
    if(input) {
        input = input.split(' ');
        if(input.length >= 1 && input.length < 4 && input[0] === './dict') {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
    
}
