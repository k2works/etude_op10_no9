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

    scoreForFrame(frame) {
        return 0;
    }
}
export default Game;