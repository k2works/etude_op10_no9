/**
 * Created by k2works on 2017/02/15.
 */
import assert from 'power-assert';

describe('Game', () => {
    describe('.score', () => {
        context('when one throw', function() {
            it('is scored', () => {
                var g = new Game();
                g.add(5);
                assert(g.score() === 5);
            });
        });
    });
});
