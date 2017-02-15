/**
 * Created by k2works on 2017/02/15.
 */
import assert from 'power-assert';
import Frame from '../src/lib/frame'

describe('Frame', () => {
    describe('.getScore', () => {
        context('when no throw', function() {
            it('is scored', () => {
                var f = new Frame();
                assert(f.getScore() === 0);
            });
        });
        context('when one throw', function() {
            it('is scored', () => {
                var f = new Frame();
                f.add(5);
                assert(f.getScore() === 5);
            });
        });
    });
});