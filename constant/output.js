
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

    
}