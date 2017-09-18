# node-interval-stream

![npm](https://img.shields.io/npm/v/node-interval-stream.svg) ![license](https://img.shields.io/npm/l/node-interval-stream.svg) ![github-issues](https://img.shields.io/github/issues/revolunet/node-interval-stream.svg) ![Circle CI build status](https://circleci.com/gh/revolunet/node-interval-stream.svg?style=svg)

Minimal NodeJS readable stream based on intervals

![nodei.co](https://nodei.co/npm/node-interval-stream.png?downloads=true&downloadRank=true&stars=true)

## QuickStart


```js

import getIntervalStream from 'node-interval-stream';

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

## Tests

```
  should receive 0 events in 0ms

    ✔ duration should be 0 < d < 250 and is 106
    ✔ should have 0 entries

  should receive 1 events in 100ms

    ✔ duration should be 100 < d < 250 and is 211
    ✔ should have 1 entries

  should receive 1 events in 10ms

    ✔ duration should be 10 < d < 250 and is 22
    ✔ should have 1 entries

  should receive 10 events in 1000ms

    ✔ duration should be 1000 < d < 1400 and is 1123
    ✔ should have 10 entries

  should receive 10 events in 100ms

    ✔ duration should be 100 < d < 400 and is 126
    ✔ should have 10 entries


  total:     10
  passing:   10
  duration:  2.4s

```



## Author

Julien Bouquillon <julien@bouquillon.com> http://github.com/revolunet

## License

 - **MIT** : http://opensource.org/licenses/MIT
