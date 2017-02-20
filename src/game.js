class Game {
    constructor() {
        this.itsScore = 0;
        this.itsThrows = Array.apply(null,Array(21)).map(function() { return 0 });
        this.itsCurrentThrow = 0;
        this.firstThrow = true;
        this.itsCurrentFrame = 0;
    }

    score() {
        return this.itsScore;
    }

    add(pins) {
        this.itsThrows[this.itsCurrentThrow++]=pins;
        this.itsScore += pins;
        this._adjustCurrentFrame();
    }

    scoreForFrame(theFrame) {
        let ball=0;
        let score = 0;
        for (let currentFrame=0;
             currentFrame < theFrame;
             currentFrame++) {
            let firstThrow = this.itsThrows[ball++];
            let secondThrow = this.itsThrows[ball++];
            let frameScore = firstThrow + secondThrow;
            // スペアの得点計算には次のフレームの第１投が必要
            if (frameScore === 10) {
                score += frameScore + this.itsThrows[ball];
            } else {
                score += frameScore;
            }
        }
        return score;
    }

    getCurrentFrame() {
        return this.itsCurrentFrame;
    }

    _adjustCurrentFrame() {
        if (this.firstThrow === true) {
            this.firstThrow = false;
            this.itsCurrentFrame++;
        } else {
            this.firstThrow = true;
        }
    }
}
export default Game;