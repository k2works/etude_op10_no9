/**
 * Created by k2works on 2017/02/15.
 */
import Scorer from './scorer';

class Game {
    constructor() {
        this.itsScore = 0;
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
        return this.scorer.scoreForFrame(theFrame);
    }
}

export default Game;