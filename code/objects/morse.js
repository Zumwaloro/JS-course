import data from './morse-data.js';

export default class MorseCodeGenerator {
    constructor() {
        this.morse = data;
    }
    
    encodeTextToMorse(text) {
        let morse = "";
        for(let i = 0; i < text.length; i++) {
            if(text[i] == " ") {
                continue;
            }
            morse += this.morse[text[i].toUpperCase()] + " ";
        }
        console.log("Original text: " + text);
        console.log("Morse encoding: " + morse);
    }

    decodeTextFromMorse(code) {
        let text = "";
        let splitCode = code.split(" ");
        for(let i = 0; i < splitCode.length; i++) {
            text += this.getKeyByValue(splitCode[i]) + " "; 
        }
        console.log("Original morse code: " + code);
        console.log("Text decoding: " + text);
    }

    getKeyByValue(value) {
        return Object.keys(this.morse).find(key => this.morse[key] === value);
    }
}