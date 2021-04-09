import { getTheUser, setTheUser, updateUserGivenChoice } from '../local-storage-utils.js';

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








test('should set the user into local storage', (expect) => {
    const user = {
        hp: 35,
        gold: 0,
        name: 'austi',
        class: 'earthy',
        completed: {}
    };

    setTheUser(user);

    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, user);
});

test('should update the user based on their choice', (expect) => {
    const user = {
        hp: 100, 
        gold: 100,
        name: 'austi',
        class: 'earthy',
        completed: {}
    }; 

    localStorage.setItem('USER', JSON.stringify(user));

    const choice = {
        hp: 10,
        gold: -30
    };

    const expected = {
        hp: 110,
        gold: 70,
        name: 'austi',
        class: 'earthy',
        completed: {
            dragon: true
        }
    };

    updateUserGivenChoice('dragon', choice);

    const actual = JSON.parse(localStorage.getItem('USER'));

    expect.deepEqual(actual, expected);

});