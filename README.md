# interval-stream

![npm](https://img.shields.io/npm/v/interval-stream.svg) ![license](https://img.shields.io/npm/l/interval-stream.svg) ![github-issues](https://img.shields.io/github/issues/revolunet/node-interval-stream.svg) ![Circle CI build status](https://circleci.com/gh/revolunet/node-interval-stream.svg?style=svg)

Minimal NodeJS readable stream based on intervals

![nodei.co](https://nodei.co/npm/interval-stream.png?downloads=true&downloadRank=true&stars=true)

## QuickStart


```js

import getIntervalStream from 'interval-stream';

var stream = getIntervalStream({
    count: 10,  // iterations
    delay: 250  // ms
});

stream.on('data', data => {
    console.log(data);
}).on('end', () => {
    console.log('finished');
});
```

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[babel-cli](https://www.npmjs.com/package/babel-cli) | ^6.3.17 | ✔
[babel-eslint](https://www.npmjs.com/package/babel-eslint) | * | ✔
[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) | * | ✔
[babel-tape-runner](https://www.npmjs.com/package/babel-tape-runner) | * | ✔
[babelify](https://www.npmjs.com/package/babelify) | 7.2.0 | ✔
[eslint](https://www.npmjs.com/package/eslint) | * | ✔
[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) | * | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.8 | ✔
[tap-spec](https://www.npmjs.com/package/tap-spec) | ^4.0.2 | ✔
[tape](https://www.npmjs.com/package/tape) | ^4.0.0 | ✔
[zuul](https://www.npmjs.com/package/zuul) | ^3.8.0 | ✔


## Author

Julien Bouquillon <julien@bouquillon.com> http://github.com/revolunet

## License

 - **MIT** : http://opensource.org/licenses/MIT
