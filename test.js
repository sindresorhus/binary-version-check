import test from 'ava';
import binVersionCheck from '.';

test('error when the range does not satisfy the bin version', async t => {
	await t.throwsAsync(binVersionCheck('curl', '1.29.0'), {
		name: 'InvalidBinaryVersion'
	});
});

test('no error when the range satisfies the bin version', async t => {
	await t.notThrowsAsync(binVersionCheck('curl', '>=1'));
});
