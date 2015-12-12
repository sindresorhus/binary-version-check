# bin-version-check [![Build Status](https://travis-ci.org/sindresorhus/bin-version-check.svg?branch=master)](https://travis-ci.org/sindresorhus/bin-version-check)

> Check whether a binary version satisfies a [semver range](https://github.com/npm/node-semver#ranges)

Useful when you have a thing that only works with specific versions of a binary.


## Install

```
$ npm install --save bin-version-check
```


## Usage

```
$ curl --version
curl 7.30.0 (x86_64-apple-darwin13.0)
```

```js
const binVersionCheck = require('bin-version-check');

binVersionCheck('curl', '>=8').catch(err => {
		throw err;
		//=> 'InvalidBinVersion: curl 7.30.0 doesn't satisfy the version requirement of >=8'
});
```


## Related

- [bin-version-check-cli](https://github.com/sindresorhus/bin-version-check-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
