import assert from 'power-assert';
import Frame from '../src/frame';

describe('Frame', () => {
    describe('.getScore', () => {
        context('when no throw', function () {
            it('is scored', () => {
                var f = new Frame();
                assert(f.getScore() === 0);
            })
        })
    })
})
