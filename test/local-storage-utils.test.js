import { getTheUser } from '../local-storage-utils.js';

const test = QUnit.test;

test('should get the user from local storage', (expect) => {
    const user = {
        hp: 35,
        gold: 0,
        name: 'austi',
        class: 'earthy',
        completed: {}
    };

    localStorage.setItem('USER', JSON.stringify(user));

    const actual = getTheUser();

    expect.deepEqual(actual, user);

});