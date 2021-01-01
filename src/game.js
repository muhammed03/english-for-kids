const TOTAL_ATTEMPTS = 8;

class Game {
    constructor(wordList) {
        this.attempts = TOTAL_ATTEMPTS;
        this.words = wordList;
        this.totalCorrect = 0;
        this.secretWord = null;
    }

    isFinished() {
        return this.attempts === 0;
    }

    hasWon() {
        return this.totalCorrect === TOTAL_ATTEMPTS;
    }

    getCorrectlyGuessed() {
        return this.totalCorrect;
    }

    getRound() {
        // randomly select word from list
        const index = Math.floor(Math.random() * this.words.length);

        // set secretWord to chosen word
        this.secretWord = this.words[index];

        //delete from index element from words
        this.words = this.words.filter((word, idx) => index !== idx);

        // return audio of the secretWord
        return this.secretWord.word;
    }

    checkWord(guessedWord) {
        this.attempts--;
        let result = "WRONG";
        if (guessedWord === this.secretWord.word) {
            result = "CORRECT";
            this.totalCorrect++;
        }
        return result;
    }
}

export default Game;

