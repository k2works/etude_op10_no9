/**
 * Created by k2works on 2017/02/15.
 */
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