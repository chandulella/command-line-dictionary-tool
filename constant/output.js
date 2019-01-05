
module.exports = {
    headLine : (value) => {
        console.log(`
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
${value} :-
 `)
    },

    printDefinitions : (data) => {
        if(data.length) {
            data.forEach(element => {
                if(element.partOfSpeech) {
                    console.log(`
*********************************************            
Attribution Text : ${element.attributionText} 
Parts Of Speech  : ${element.partOfSpeech} 
Definition       : ${element.text}

            `)  
                }
            })
        } else {
            console.log(`
Sorry, No Definitions Found            
                        `)
        }         
    },
    printSynonyms : (data) => {
        if(data && data.length > 0) {
            data[0].words.forEach(element => {
                console.log(`${element}`)
            });
            console.log(`
        `)
        } else {
            console.log(`
Sorry, No Synonyms Found            
            `)
        }
    },
    printAntonyms : (data) => {
        if(data && data.length > 0) {
            data[0].words.forEach(element => {
                console.log(`${element}`)
            });
        console.log(`
        
        `)
        } else {
            console.log(`
Sorry, No Antonyms Found            
            `)
        }
    },
    printExamples : (data) => {
        if(data.examples) {
            data.examples.forEach(element => {
                console.log(`
${element.text}
                `)
            })
        } else {
            console.log(`
Sorry, No Examples Found            
                        `)
        }
    },


    gameStarted : () => {
        console.log(`
Let's Get This Game Started        
------------------------------------------------------------------------
Need to find a word for a given question
question can be listed with Definition and Synonym/Antonym

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Please be patient while fetching Question
        `)
    },
    gameEnded : () => {
        console.log(`
You Ended the game        
------------------------------------------------------------------------
click ./dict play to play again .
We are looking for you.

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        `)
    },

    correctAnswer : () => {
        console.log(`Hurray ! Your Answer is Correct
----------------------------------------------------
Please wait for few seconds to fetch question
`)
    },
    wrongAnswer : () => {
        console.log(`OOPS ! Your Answer is Wrong
Please choose below options
Press 1 for RETRY
Press 2 for HINT
Press 3 for Quit
`);
    }

    
}