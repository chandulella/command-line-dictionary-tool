const axios = require('axios');

const self = module.exports = {
    definitions: async (word) => {
        try {
            let url =  `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=100&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=${process.env.API}`
            let res = await self.makeRequest(url);
            return res.status === 200 ? res.data : null;
        } catch (err) {
            throw Error(err);
        }
    },
    synonyms: async (word) => {
        try {
           let url = `https://api.wordnik.com/v4/word.json/${word}/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=100&api_key=${process.env.API}`;
            let res = await self.makeRequest(url);
            return res.status === 200 ? res.data : null;
        } catch (err) {
            throw Error(err);
        }
    },
    antonyms: async (word) => {
        try {
            let url = `https://api.wordnik.com/v4/word.json/${word}/relatedWords?useCanonical=false&relationshipTypes=antonym&limitPerRelationshipType=100&api_key=${process.env.API}`;
             let res = await self.makeRequest(url);
             return res.status === 200 ? res.data : null;
         } catch (err) {
             throw Error(err);
         }
    },
    examples: async (word) => {
        try {
            let url = `https://api.wordnik.com/v4/word.json/${word}/examples?includeDuplicates=false&useCanonical=false&limit=3&api_key=${process.env.API}`;
             let res = await self.makeRequest(url);
             return res.status === 200 ? res.data : null;
         } catch (err) {
             throw Error(err);
         }
    },
    wordOfTheDay : async () => {
        try{
            let url = `https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${process.env.API}`
            let res = await self.makeRequest(url);
            return res.status === 200 ? res.data.word : null;
        } catch (err) {
            throw Error(err);
        }
    },
    fetchrandomWord : async () => {
        try {
            let url = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${process.env.API}`
            let res = await self.makeRequest(url);
            return res.status === 200 ? res.data.word : null;
        } catch (err) {
            throw Error(err);
        }
    },

    makeRequest : async (url) => {
        try {
            // console.log(url)
            let response = await axios.get(url);
            // console.log(response.data)
            return response;
        } catch (err) {
            if(err && err.response && err.response.status === 403){
                throw Error ('Ivalid API .Please check your API KEY')
            } else {
                throw Error('We are unable to fetch from Wordnik | Please check your Internet Connectivity')
            }
        }
    },


    matchFinalResult : (def,syn,ant) =>{
        let definitions = [];
        let synonyms = [];
        let antonyms = [];

        if(def.length) {
            def.forEach(element => {
                if(element.partOfSpeech) {
                    definitions.push(element.text) 
                }
            })
        } 

        if(syn && syn.length > 0) {
            syn[0].words.forEach(element => {
                synonyms.push(element)
            });
        }

        if(ant && ant.length > 0) {
            ant[0].words.forEach(element => {
                antonyms.push(element)
            });
        }

        return {
            definitions : definitions,
            synonyms : synonyms,
            antonyms : antonyms
        }
    }
}