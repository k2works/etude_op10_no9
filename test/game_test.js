import assert from 'power-assert';
import Game from '../src/game';

describe('Game', () => {
    describe('.score', () => {
        context('when one throw', function () {
            it('is scored', () => {
                var g = new Game();
                g.add(5);
                assert(g.score() === 5);
            })
        });
        context('when two throws', function () {
            it('is scored', () => {
                var g = new Game();
                g.add(5);
                g.add(4);
                assert(g.score() === 9);
            })
        });
    })
});
