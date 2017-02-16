/**
 * Created by k2works on 2017/02/15.
 */
class Game {
    constructor() {
        this.itsScore = 0;
        this.itsThrows = new Array(21);
        this.itsCurrentThrow = 0;
    }

    score() {
        return this.itsScore;
    }

    add(pins) {
        this.itsThrows[this.itsCurrentThrow++]=pins;
        this.itsScore += pins;
    }

    scoreForFrame(theFrame) {
        let ball = 0;
        let score = 0;
        for(let currentFrame = 0;
            currentFrame < theFrame;
            currentFrame++)
        {
            score += this.itsThrows[ball++] + this.itsThrows[ball++];
        }
        return score;
    }
}

export default Game;