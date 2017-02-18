/**
 * Created by k2works on 2017/02/15.
 */
class Game {
    constructor() {
        this.itsScore = 0;
        this.itsThrows = Array.apply(null,Array(21)).map(function() { return 0 });
        this.itsCurrentThrow = 0;
        this.itsCurrentFrame = 1;
        this.firstThrow = true;
    }

    score() {
        return this.scoreForFrame(this.getCurrentFrame()-1);
    }

    add(pins) {
        this.itsThrows[this.itsCurrentThrow++]=pins;
        this.itsScore += pins;
        this.adjustCurrentFrame(pins);
    }

    adjustCurrentFrame(pins) {
        if (this.firstThrow === true) {
            if ( pins === 10 ) // ストライク
                this.itsCurrentFrame++;
            else
                this.firstThrow = false;
        }
        else {
            this.itsCurrentFrame++;
            this.firstThrow = true;
        }
        this.itsCurrentFrame = Math.min(11, this.itsCurrentFrame);
    }

    scoreForFrame(theFrame) {
        this.ball = 0;
        let score = 0;
        for(let currentFrame = 0;
            currentFrame < theFrame;
            currentFrame++)
        {
            this.firstThrow = this.itsThrows[this.ball++];
            if (this.firstThrow === 10)
            {
                score += 10 + this.itsThrows[this.ball] + this.itsThrows[this.ball+1];
            }
            else
            {
                score += this.handleSecondThrow();
            }
        }
        return score;
    }

    handleSecondThrow() {
        let score = 0;
        this.secondThrow = this.itsThrows[this.ball++];
        let frameScore = this.firstThrow + this.secondThrow;
        // スペアの得点計算には次のフレームの第１投が必要
        if (frameScore === 10) {
            score += frameScore + this.itsThrows[this.ball];
        }
        else {
            score += frameScore;
        }
        return score;
    }

    getCurrentFrame() {
        return this.itsCurrentFrame;
    }
}

export default Game;