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
            let firstThrow = this.itsThrows[ball++];
            let secondThrow = this.itsThrows[ball++];
            let frameScore = firstThrow + secondThrow;
            // スペアの得点計算には次のフレームの第１投が必要
            if ( frameScore === 10 )
            {
                score += frameScore + this.itsThrows[ball];
            }
            else
            {
                score += frameScore;
            }
        }
        return score;
    }
}

export default Game;