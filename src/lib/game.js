/**
 * Created by k2works on 2017/02/15.
 */
class Game {
    constructor() {
        this.itsScore = 0;
        this.itsThrows = Array.apply(null,Array(21)).map(function() { return 0 });
        this.itsCurrentThrow = 0;
        this.itsCurrentFrame = 1;
        this.firstThrow = true;
    }

    score() {
        return this.scoreForFrame(this.getCurrentFrame()-1);
    }

    add(pins) {
        this.itsThrows[this.itsCurrentThrow++]=pins;
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
    }

    scoreForFrame(theFrame) {
        let ball = 0;
        let score = 0;
        for(let currentFrame = 0;
            currentFrame < theFrame;
            currentFrame++)
        {
            let firstThrow = this.itsThrows[ball++];
            if (firstThrow === 10)
            {
                score += 10 + this.itsThrows[ball] + this.itsThrows[ball+1];
            }
            else
            {
                let secondThrow = this.itsThrows[ball++];
                let frameScore = firstThrow + secondThrow;
                // スペアの得点計算には次のフレームの第１投が必要
                if ( frameScore === 10 )
                {
                    score += frameScore + this.itsThrows[ball];
                }
                else
                {
                    score += frameScore;
                }
            }
        }
        return score;
    }

    getCurrentFrame() {
        return this.itsCurrentFrame;
    }
}

export default Game;