/**
 * Created by k2works on 2017/02/15.
 */
import Scorer from './scorer';

class Game {
    constructor() {
        this.itsCurrentFrame = 0;
        this.firstThrowInFrame = true;
        this.scorer = new Scorer();
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
        if ((this.firstThrowInFrame && pins === 10 || (!this.firstThrowInFrame)))
        {
            this._advanceFrame();
            this.firstThrowInFrame = true;
        }
        else
        {
            this.firstThrowInFrame = false;
        }
    }

    _advanceFrame() {
        this.itsCurrentFrame = Math.min(10, this.itsCurrentFrame + 1);
    }
}

export default Game;