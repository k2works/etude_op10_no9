import assert from 'power-assert';
import Frame from '../src/frame';

describe('Frame', () => {
    describe('.getScore', () => {
        context('when no throw', function () {
            it('is scored', () => {
                var f = new Frame();
                assert(f.getScore() === 0);
            })
        });
        context('when one throw', function () {
            it('is scored', () => {
                var f = new Frame();
                f.add(5);
                assert(f.getScore() === 5);
            })
        });
    })
})
