/**
 * Created by k2works on 2017/02/15.
 */
import assert from 'power-assert';
import Game from '../src/lib/game';

describe('Game', () => {
    let g;
    beforeEach(function(){
        g = new Game();
    });

    describe('.score', () => {
        context('when one throw', function() {
            it('is scored', () => {
                g.add(5);
                assert(g.score() === 5);
            })
        });
        context('when tow throws', function () {
            it('is scored', () => {
                g.add(5);
                g.add(4);
                assert(g.score() === 9);
            })
        });
        context('when four throws', function () {
            it('is scored', () => {
                g.add(5);
                g.add(4);
                g.add(7);
                g.add(2);
                assert(g.score() === 18);
            })
        });
        context('when simple spare', function () {
            it('is scored by frame', () => {
                g.add(3);
                g.add(7);
                g.add(3);
                assert(g.score() === 18);
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
        context('when simple spare', function () {
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
        context('when tow throws', function () {
            it('is scored', () => {
                g.add(5);
                g.add(4);
                assert(g.score() === 9);
            })
        });
    });

    describe('.getCurrentFrame', () => {
        context('when one throw', function () {
            it('current frame is', () =>{
                g.add(5);
                assert(g.getCurrentFrame() === 1);
            })
        });
        context('when two throw', function () {
            it('current frame is', () =>{
                g.add(5);
                g.add(4);
                assert(g.getCurrentFrame() === 2);
            })
        });
        context('when four throw', function () {
            it('current frame is', () =>{
                g.add(5);
                g.add(4);
                g.add(7);
                g.add(2);
                assert(g.getCurrentFrame() === 3);
            })
        });
    });
});
