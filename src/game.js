class Game {
    constructor() {
        this.itsScore = 0;
    }

    score() {
        return this.itsScore;
    }

    add(pins) {
        this.itsScore += pins;
    }
}
export default Game;