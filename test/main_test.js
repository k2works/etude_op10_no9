import assert from 'power-assert';
import Main from '../src/main';

describe('Main', () => {
    describe('.hello', () => {
        context('when', function() {
            it('is', () => {
                let main = new Main();
                assert(main.hello() === 'Hello!');
            });
        });
    });
});