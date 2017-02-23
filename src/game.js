class Game {
    constructor() {
        this.itsScore = 0;
        this.itsThrows = Array.apply(null,Array(21)).map(function() { return 0 });
        this.itsCurrentThrow = 0;
        this.itsFirstThrow = true;
        this.itsCurrentFrame = 1;
    }

    score() {
        return this.scoreForFrame(this.getCurrentFrame()-1);
    }

    add(pins) {
        this.itsThrows[this.itsCurrentThrow++]=pins;
        this.itsScore += pins;
        this._adjustCurrentFrame(pins);
    }

    scoreForFrame(theFrame) {
        this.ball=0;
        let score = 0;
        for (let currentFrame=0;
             currentFrame < theFrame;
             currentFrame++) {
            this.firstThrow = this.itsThrows[this.ball];
            if (this._strike()) {
                this.ball++;
                score += 10 + this._nextTwoBalls();
            } else {
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
        this.secondThrow = this.itsThrows[this.ball+1];
        let frameScore = this.firstThrow + this.secondThrow;
        // スペアの得点計算には次のフレームの第１投が必要
        if (this._spare()) {
            this.ball+=2;
            score += 10 + this._nextBall();
        } else {
            this.ball+=2;
            score += frameScore;
        }
        return score
    }

    _spare() {
        return (this.itsThrows[this.ball] + this.itsThrows[this.ball+1] === 10);
    }

    _nextBall() {
        return this.itsThrows[this.ball];
    }

    _adjustCurrentFrame(pins) {
        if (this.itsFirstThrow == true ) {
            if (pins === 10) // ストライク
                this.itsCurrentFrame++;
            else
                this.itsFirstThrow = false;
        } else {
            this.itsCurrentFrame++;
            this.itsFirstThrow = true;
        }
        this.itsCurrentFrame = Math.min(11, this.itsCurrentFrame);
    }
}
export default Game;