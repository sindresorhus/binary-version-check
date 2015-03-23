'use strict';
var semver = require('semver');
var binVersion = require('bin-version');
var semverTruncate = require('semver-truncate');

module.exports = function (bin, versionRange, cb) {
	if (typeof bin !== 'string' || typeof versionRange !== 'string') {
		throw new Error('`binary` and `versionRange` required');
	}

	if (!semver.validRange(versionRange)) {
		cb(new Error('Invalid version range'));
		return;
	}

	binVersion(bin, function (err, binVersion) {
		if (err) {
			cb(err);
			return;
		}

		if (!semver.satisfies(semverTruncate(binVersion, 'patch'), versionRange)) {
			err = new Error(bin + ' ' + binVersion + ' does not satisfy the version requirement of ' + versionRange);
			err.name = 'InvalidBinVersion';
			cb(err);
			return;
		}

		cb();
	});
};
