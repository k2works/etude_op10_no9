/**
 * Created by k2works on 2017/02/15.
 */
import Scorer from './scorer';

class Game {
    constructor() {
        this.itsCurrentFrame = 1;
        this.firstThrow = true;
        this.scorer = new Scorer();
    }

    score() {
        return this.scoreForFrame(this.getCurrentFrame()-1);
    }

    getCurrentFrame() {
        return this.itsCurrentFrame;
    }

    add(pins) {
        this.scorer.addThrow(pins);
        this._adjustCurrentFrame(pins);
    }

    scoreForFrame(theFrame) {
        return this.scorer.scoreForFrame(theFrame);
    }

    _adjustCurrentFrame(pins) {
        if (this.firstThrow === true)
        {
            if(this._adjustFrameForStrike(pins) === false)
                this.firstThrow = false;
        }
        else
        {
            this.firstThrow = true;
            this._advanceFrame();
        }
    }

    _adjustFrameForStrike(pins) {
        if (pins === 10)
        {
            this._advanceFrame();
            return true;
        }
        return false;
    }

    _advanceFrame() {
        this.itsCurrentFrame++;
        if(this.itsCurrentFrame > 11)
            this.itsCurrentFrame = 11;
    }
}

export default Game;