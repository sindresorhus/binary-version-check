'use strict';
const semver = require('semver');
const binVersion = require('bin-version');
const semverTruncate = require('semver-truncate');

module.exports = (bin, versionRange, opts) => {
	if (typeof bin !== 'string' || typeof versionRange !== 'string') {
		return Promise.reject('`binary` and `versionRange` required');
	}

	if (!semver.validRange(versionRange)) {
		return Promise.reject(new Error('Invalid version range'));
	}

	opts = opts || {};

	return binVersion(bin).then(binVersion => {
		if (!semver.satisfies(semverTruncate(binVersion, 'patch'), versionRange)) {
			const err = new Error(`${bin} ${binVersion} doesn't satisfy the version requirement of ${versionRange}`);
			err.name = 'InvalidBinVersion';
			throw err;
		}
	});
};
