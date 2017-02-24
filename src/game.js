import Scorer from './scorer';

class Game {
    constructor() {
        this.itsFirstThrow = true;
        this.itsCurrentFrame = 1;
        this.scorer = new Scorer;
    }

    score() {
        return this.scoreForFrame(this.getCurrentFrame()-1);
    }

    add(pins) {
        this.scorer.addThrow(pins);
        this._adjustCurrentFrame(pins);
    }

    getCurrentFrame() {
        return this.itsCurrentFrame;
    }

    scoreForFrame(theFrame) {
        return this.scorer.scoreForFrame(theFrame);
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