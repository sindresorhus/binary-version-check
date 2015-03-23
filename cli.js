#!/usr/bin/env node
'use strict';
var meow = require('meow');
var binVersionCheck = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ bin-version-check <binary> <semver-range>',
		'',
		'Example',
		'  $ curl --version',
		'  curl 7.30.0 (x86_64-apple-darwin13.0)',
		'  $ bin-version-check curl \'>=8\'',
		'  curl 7.30.0 does not satisfy the version requirement of >=8',
		'',
		'  Exits with code 0 if the semver range is satisfied and 1 if not'
	].join('\n')
});

if (cli.input.length === 0) {
	console.error('`binary` and `versionRange` required');
	process.exit(1);
}

binVersionCheck(cli.input[0], cli.input[1], function (err) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}
});
