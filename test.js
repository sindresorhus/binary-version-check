import test from 'ava';
import m from './';

test('error when the range does not satisfy the bin version', async t => {
	try {
		await m('curl', '1.29.0');
	} catch (err) {
		t.is(err.name, 'InvalidBinVersion');
	}
});

test('no error when the range satisfies the bin version', async t => {
	await t.notThrows(m('curl', '>=1'));
});
