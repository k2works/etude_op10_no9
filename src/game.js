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
            if (this._strike()) {
                score += 10 + this._nextTwoBallForSpare();
                this.ball++;
            } else if (this._spare()) {
                score += 10 + this._nextBallForSpare();
                this.ball+=2;
            } else {
                score += this._twoBallsInFrame();
                this.ball+=2;
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

    _nextTwoBallForSpare() {
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