/**
 * Created by k2works on 2017/02/15.
 */

class Frame {
    constructor() {
        this.itsScore = 0;
    }

    getScore() {
        return this.itsScore;
    }
    add(pins) {
        this.itsScore += pins;
    }
}

export default Frame;