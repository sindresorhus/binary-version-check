'use strict';
var assert = require('assert');
var binVersionCheck = require('./');

it('should return an error on when the range does not satisfiy the bin version', function (cb) {
	binVersionCheck('curl', '1.29.0', function (err) {
		console.log(err);
		assert.equal(err.name, 'InvalidBinVersion');
		cb();
	});
});

it('should not return an error on when the range satisfies the bin version', function (cb) {
	binVersionCheck('curl', '>=1', function (err) {
		assert(!err, err);
		cb();
	});
});
