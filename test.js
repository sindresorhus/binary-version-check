import test from 'ava';
import binaryVersionCheck from './index.js';

test('error when the range does not satisfy the bin version', async t => {
	await t.throwsAsync(binaryVersionCheck('curl', '1.29.0'), {
		name: 'InvalidBinaryVersion'
	});
});

test('no error when the range satisfies the bin version', async t => {
	await t.notThrowsAsync(binaryVersionCheck('curl', '>=1'));
});
