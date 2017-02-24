import assert from 'power-assert';
import Game from '../src/game';

describe('Game', () => {
    let g;
    beforeEach(function () {
        g = new Game();
    });

    describe('.score', () => {
        context('when two throws', function () {
            it('is scored', () => {
                g.add(5);
                g.add(4);
                assert(g.score() === 9);
            })
        });
        context('when spare', function () {
            it('is scored', () => {
                g.add(3);
                g.add(7);
                g.add(3);
                assert(g.score() === 13);
            });
            it('is scored', () => {
                g.add(3);
                g.add(7);
                g.add(3);
                g.add(2);
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
                g.add(10);
                g.add(3);
                g.add(6);
                assert(g.score() === 28);
            })
        });
        context('when perfect game', function () {
            it('is scored', () => {
                for(let i=0; i<12; i++) {
                    g.add(10);
                }
                assert(g.score() === 300);
            })
        });
        context('when 10th frame', function () {
            it('is scored', () => {
                for(let i=0; i<9; i++) {
                    g.add(0);
                    g.add(0);
                }
                g.add(2);
                g.add(8);  // 10番目のフレームのスペア
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
                g.add(5);
                g.add(4);
                g.add(7);
                g.add(2);
                assert(g.scoreForFrame(1) === 9);
                assert(g.scoreForFrame(2) === 18);
            })
        });
        context('when spare', function () {
            it('is scored by frame', () => {
                g.add(3);
                g.add(7);
                g.add(3);
                assert(g.scoreForFrame(1) === 13);
            });
            it('is scored by frame', () => {
                g.add(3);
                g.add(7);
                g.add(3);
                g.add(2);
                assert(g.scoreForFrame(2) === 18);
            })
        });
        context('when strike', function () {
            it('is scored by frame', () => {
                g.add(10);
                g.add(3);
                g.add(6);
                assert(g.scoreForFrame(1) === 19);
            })
        })
    });
});
