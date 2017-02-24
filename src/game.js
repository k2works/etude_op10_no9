import Scorer from './scorer';

class Game {
    constructor() {
        this.itsFirstThrow = true;
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
        if (this.itsFirstThrow == true ) {
            if (this._adjustFrameForStrike(pins) === false)
                this.itsFirstThrow = false;
        } else {
            this._advanceFrame();
            this.itsFirstThrow = true;
        }
    }

    _adjustFrameForStrike(pins) {
        if (pins === 10) {
            this._advanceFrame();
            return true;
        }
        return false;
    }

    _advanceFrame() {
        this.itsCurrentFrame = Math.min(10, this.itsCurrentFrame+1);
    }
}
export default Game;