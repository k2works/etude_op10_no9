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
                for(let i=0; i<12; i++)
                {
                    g.add(10);
                }
                assert(g.score() === 300);
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
            });
        });
        context('when strike', function () {
            it('is scored by frame', () => {
                g.add(10);
                g.add(3);
                g.add(6);
                assert(g.scoreForFrame(1) === 19);
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
        context('when spare', function () {
            it('current frame is', () => {
                g.add(3);
                g.add(7);
                g.add(3);
                assert(g.getCurrentFrame() === 2);
            });
            it('current frame is', () => {
                g.add(3);
                g.add(7);
                g.add(3);
                g.add(2);
                assert(g.getCurrentFrame() === 3);
            })
        });
        context('when strike', function () {
            it('current frame is', () => {
                g.add(10);
                g.add(3);
                g.add(6);
                assert(g.getCurrentFrame() === 3);
            })
        });
        context('when perfect game', function () {
            it('current frame is', () => {
                for(let i=0; i<12; i++)
                {
                    g.add(10);
                }
                assert(g.getCurrentFrame() === 10);
            })
        });
    });
});
