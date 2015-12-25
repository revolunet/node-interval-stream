'use strict';

import test from 'tape';

import getIntervalStream from '../src';


let tests = [{
    count: 0,
    delay: 100,
    maxDuration: 250
},{
    count: 1,
    delay: 100,
    maxDuration: 250
},{
    count: 1,
    delay: 10,
    maxDuration: 250
},{
    count: 10,
    delay: 100,
    maxDuration: 1400
},{
    count: 10,
    delay: 10,
    maxDuration: 400
}];


tests.forEach(testCase => {

    let duration = parseInt(testCase.count * testCase.delay);

    test(`should receive ${testCase.count} events in ${duration}ms`, (t) => {

        t.plan(2);

        let start = (new Date()).getTime();
        let entries = [];

        var stream = getIntervalStream({
            count: testCase.count,  // iterations
            delay: testCase.delay  // ms
        });

        stream.on('data', data => {
            entries.push(data);
        }).on('end', () => {
            let resultDuration = (new Date()).getTime() - start;
            if (resultDuration >= duration && resultDuration <= testCase.maxDuration) {
                t.pass(`duration should be ${duration} < d < ${testCase.maxDuration} and is ${resultDuration}`);
            } else {
                t.fail(`duration should be ${duration} < d < ${testCase.maxDuration} and is ${resultDuration}`);
            }
            t.equal(entries.length, testCase.count, `should have ${testCase.count} entries`);
            //t.end();
        });

    });

});

