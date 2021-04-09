import { findById } from '../utils.js';

const test = QUnit.test;

test('should find the right item in an array', (expect) => {
    const arr = [
        { id: 'alien', type: 'scary' },
        { id: 'sun', type: 'bright' }
    ];


    const expected = { id: 'alien', type: 'scary' };

    const actual = findById(arr, 'alien');

    expect.deepEqual(actual, expected);



});