/**
 * Created by k2works on 2017/02/15.
 */
import assert from 'power-assert';
import Game from '../src/lib/game';

describe('Game', () => {
    describe('.score', () => {
        context('when one throw', function() {
            it('is scored', () => {
                let g = new Game();
                g.add(5);
                assert(g.score() === 5);
            })
        });
        context('when tow throws', function () {
            it('is scored', () => {
                let g = new Game();
                g.add(5);
                g.add(4);
                assert(g.score() === 9);
            })
        });
        context('when four throws', function () {
            it('is scored', () => {
                let g = new Game();
                g.add(5);
                g.add(4);
                g.add(7);
                g.add(2);
                assert(g.score() === 18);
            })
        });
    });
    describe('.scoreForFrame', () => {
        context('when four throws', function () {
            it('is scored by frame', () => {
                let g = new Game();
                g.add(5);
                g.add(4);
                g.add(7);
                g.add(2);
                assert(g.scoreForFrame(1) === 9);
                assert(g.scoreForFrame(2) === 18);
            })
        });
        context('when simple spare', function () {
            it('is scored by frame', () => {
                let g = new Game();
            })
        })
    })
});
