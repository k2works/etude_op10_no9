class Game {
    constructor() {
        this.itsScore = 0;
        this.itsThrows = Array.apply(null,Array(21)).map(function() { return 0 });
        this.itsCurrentThrow = 0;
    }

    score() {
        return this.itsScore;
    }

    add(pins) {
        this.itsThrows[this.itsCurrentThrow++]=pins;
        this.itsScore += pins;
    }

    scoreForFrame(frame) {
        let score = 0;
        for (let ball=0;
             frame > 0 && (ball<this.itsCurrentThrow);
             ball+2,frame--) {
            score += this.itsThrows[ball] + this.itsThrows[ball+1];
        }
        return score;
    }
}
export default Game;