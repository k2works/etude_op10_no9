var title = function(){
    /*
     ____                _ _                _____
     |  _ \              | (_)              / ____|
     | |_) | _____      _| |_ _ __   __ _  | |  __  __ _ _ __ ___   ___
     |  _ < / _ \ \ /\ / / | | '_ \ / _` | | | |_ |/ _` | '_ ` _ \ / _ \
     | |_) | (_) \ V  V /| | | | | | (_| | | |__| | (_| | | | | | |  __/
     |____/ \___/ \_/\_/ |_|_|_| |_|\__, |  \_____|\__,_|_| |_| |_|\___|
     __/ |
     |___/
     */
}.toString().replace(/function+\W+\*[^]\n|\s+\*\/\s+}$/g, "");

console.log(title);

var Game = require("./lib/game");
var BowlingGame = function() {
    this.game = null;

    this.start = function() {
        this.game = new Game();
    };

    this.add = function (pins) {
        if (this.game === null) {
            console.log('Not Started')
        } else {
            this.game.add(pins);
        }
    };

    this.score = function () {
        if (this.game === null) {
            console.log('Not Started')
        } else {
            return this.game.score();
        }
    };

    this.scoreForFrame = function (frame) {
        if (this.game === null) {
            console.log('Not Started')
        } else {
            return this.game.scoreForFrame(frame);
        }
    };

    this.end = function () {
        this.game = null;
    }
};
module.exports = BowlingGame;