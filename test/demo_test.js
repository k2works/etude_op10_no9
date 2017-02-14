// @flow

import assert from 'power-assert';
import Human from '../src/lib/human';

describe('ES6 demo', () => {

    it('Destructuring and TemplateLiteral', () => {
        let [alice, bob] = [ { name: 'alice' }, { name: 'bob' } ];
        assert(`${alice.name} and ${bob.name}` === `bob and alice`);
    });

    it('ArrowFunctionExpression and SpreadElement', () => {
        let seven = 7, ary = [4, 5];
        assert(seven === ((v, i) => v + i)(...[...ary]));
    });

    it('Enhanced Object Literals', () => {
        let name = 'bobby';
        assert.deepEqual({
            name,
            [ `${name}'s greet` ]: `Hello, I'm ${name}`
        }, null);
    });

    it('is Human', () => {
        var obj = new Human('BABEL');
        var name: string = obj.hello();
        assert(name == "My name is't BABEL");
    });
});