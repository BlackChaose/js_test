import assert from 'assert';

import getFunction from '../functions2';

const take = getFunction();

// BEGIN (write your solution here)

assert.deepEqual(take([1, 2, 3], 2), [1, 2], 'Err0');
assert.deepEqual(take([], 2), [], 'Err1');
assert.deepEqual(take([1,2,3], 3), [], "Err2");

// END
