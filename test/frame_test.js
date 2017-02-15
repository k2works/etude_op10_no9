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
    });
});