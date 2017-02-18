/**
 * Created by k2works on 2017/02/15.
 */
import assert from 'power-assert';
import Game from '../src/lib/game';

describe('Game', () => {
    let _twoThrows = function (g) {
        g.add(5);
        g.add(4);
    };

    let _fourThrows = function (g) {
        g.add(5);
        g.add(4);
        g.add(7);
        g.add(2);
    };
    let _threeThrowsSpare = function (g) {
        g.add(3);
        g.add(7);
        g.add(3);
    };

    let _fourThrowsSpare = function (g) {
        g.add(3);
        g.add(7);
        g.add(3);
        g.add(2);
    };
    let _threeThrowsStrike = function (g) {
        g.add(10);
        g.add(3);
        g.add(6);
    };

    let g;
    beforeEach(function(){
        g = new Game();
    });

    describe('.score', () => {
        context('when tow throws', function () {
            it('is scored', () => {
                _twoThrows(g);
                assert(g.score() === 9);
            })
        });
        context('when four throws', function () {
            it('is scored', () => {
                _fourThrows(g);
                assert(g.score() === 18);
            })
        });
        context('when spare', function () {
            it('is scored', () => {
                _threeThrowsSpare(g);
                assert(g.score() === 13);
            });
            it('is scored', () => {
                _fourThrowsSpare(g);
                assert(g.score() === 18);
            });
            it('is scored', () => {
                for(let i=0; i<9; i++)
                    g.add(10);
                g.add(9);
                g.add(1);
                g.add(1);
                assert(g.score() === 270);
            })
        });
        context('when strike', function () {
            it('is scored', () => {
                _threeThrowsStrike(g);
                assert(g.score() === 28);
            })
        });
        context('when perfect game', function () {
            it('is scored', () => {
                for(let i=0; i<12; i++)
                {
                    g.add(10);
                }
                assert(g.score() === 300);
            })
        });
        context('when 10th frame', function () {
            it('is scored', () => {
                for(let i=0; i<9; i++)
                {
                    g.add(0);
                    g.add(0);
                }
                g.add(2);
                g.add(8); // 10番目のフレームのスペア
                g.add(10); // 配列の最後にストライク
                assert(g.score() === 20);
            })
        });
        context('when playing one game', function () {
            it('is scored', () => {
                g.add(1);
                g.add(4);
                g.add(4);
                g.add(5);
                g.add(6);
                g.add(4);
                g.add(5);
                g.add(5);
                g.add(10);
                g.add(0);
                g.add(1);
                g.add(7);
                g.add(3);
                g.add(6);
                g.add(4);
                g.add(10);
                g.add(2);
                g.add(8);
                g.add(6);
                assert(g.score() === 133);
            })
        });
        context('when heart break game', function () {
            it('is scored', () => {
                for(let i=0; i<11; i++)
                    g.add(10);
                g.add(9);
                assert(g.score() === 299);
            })
        });
    });

    describe('.scoreForFrame', () => {
        context('when four throws', function () {
            it('is scored by frame', () => {
                _fourThrows(g);
                assert(g.scoreForFrame(1) === 9);
                assert(g.scoreForFrame(2) === 18);
            })
        });
        context('when spare', function () {
            it('is scored by frame', () => {
                _threeThrowsSpare(g);
                assert(g.scoreForFrame(1) === 13);
            });
            it('is scored by frame', () => {
                _fourThrowsSpare(g);
                assert(g.scoreForFrame(2) === 18);
            });
        });
        context('when strike', function () {
            it('is scored by frame', () => {
                _threeThrowsStrike(g);
                assert(g.scoreForFrame(1) === 19);
            })
        });
    });
});
