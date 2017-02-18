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
            this.firstThrow = this.itsThrows[this.ball];
            if (this._strike())
            {
                this.ball++;
                score += 10 + this._nextTwoBalls();
            }
            else
            {
                score += this._handleSecondThrow();
            }
        }
        return score;
    }

    getCurrentFrame() {
        return this.itsCurrentFrame;
    }

    _strike() {
        return this.itsThrows[this.ball] === 10;
    }

    _nextTwoBalls() {
        return this.itsThrows[this.ball] + this.itsThrows[this.ball + 1];
    }

    _handleSecondThrow() {
        let score = 0;
        this.secondThrow = this.itsThrows[this.ball + 1];
        let frameScore = this.firstThrow + this.secondThrow;
        // スペアの得点計算には次のフレームの第１投が必要
        if (this._spare()) {
            this.ball += 2;
            score += 10 + this._nextBall();
        }
        else
        {
            score += this._twoBallsInFrame();
            this.ball += 2;
        }
        return score;
    }

    _spare() {
        return (this.itsThrows[this.ball] + this.itsThrows[this.ball+1] === 10);
    }

    _nextBall() {
        return this.itsThrows[this.ball];
    }

    _twoBallsInFrame() {
        return this.itsThrows[this.ball] + this.itsThrows[this.ball+1];
    }
}

export default Game;