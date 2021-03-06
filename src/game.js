import Scorer from './scorer';

class Game {
    constructor() {
        this.firstThrowInFrame = true;
        this.itsCurrentFrame = 0;
        this.scorer = new Scorer;
    }

    score() {
        return this.scoreForFrame(this.itsCurrentFrame);
    }

    add(pins) {
        this.scorer.addThrow(pins);
        this._adjustCurrentFrame(pins);
    }

    scoreForFrame(theFrame) {
        return this.scorer.scoreForFrame(theFrame);
    }

    _adjustCurrentFrame(pins) {
        if (this._lastBallInFrame(pins)) {
            this._advanceFrame();
            this.firstThrowInFrame = true;
        } else {
            this.firstThrowInFrame = false;
        }
    }

    _lastBallInFrame(pins) {
        return this._strike(pins) || (!this.firstThrowInFrame);
    }

    _strike(pins) {
        return this.firstThrowInFrame && pins === 10;
    }

    _advanceFrame() {
        this.itsCurrentFrame = Math.min(10, this.itsCurrentFrame+1);
    }
}
export default Game;