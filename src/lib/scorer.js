/**
 * Created by k2works on 2017/02/18.
 */
class Scorer {
    constructor() {
        this.itsThrows = Array.apply(null,Array(21)).map(function() { return 0 });
        this.itsCurrentThrow = 0;
    }

    addThrow(pins) {
        this.itsThrows[this.itsCurrentThrow++]=pins;
    }

    scoreForFrame(theFrame) {
        this.ball = 0;
        let score = 0;
        for(let currentFrame = 0;
            currentFrame < theFrame;
            currentFrame++)
        {
            if (this._strike())
            {
                score += 10 + this._nextTwoBallsForStrike();
                this.ball++;
            }
            else if (this._spare())
            {
                score += 10 + this._nextBallForSpare();
                this.ball += 2;
            }
            else
            {
                score += this._twoBallsInFrame();
                this.ball += 2;
            }
        }
        return score;
    }

    _strike() {
        return this.itsThrows[this.ball] === 10;
    }

    _nextTwoBallsForStrike() {
        return this.itsThrows[this.ball+1] + this.itsThrows[this.ball+2];
    }

    _spare() {
        return (this.itsThrows[this.ball] + this.itsThrows[this.ball+1] === 10);
    }

    _nextBallForSpare() {
        return this.itsThrows[this.ball+2];
    }

    _twoBallsInFrame() {
        return this.itsThrows[this.ball] + this.itsThrows[this.ball+1];
    }
}

export default Scorer;

