var bignumJSON = require('./lib');

var NUM_CALLS = 10000;
var NUM_TRIALS = 10;
var jsonStr = '{ \
    "bigint": 92233720368547758074237, \
    "bigdecimal": -9223372036854775807.4237482374983253298159, \
    "string": "hello world", \
    "boolean": true, \
    "array": [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], \
    "object": { \
        "int": 15, \
        "float": 15.56 \
    } \
}';

function runTest(func, input) {

    var total = 0;

    for (var i = 0; i < NUM_TRIALS; i++) {

        var startTime = process.hrtime();

        for (var j = 0; j < NUM_CALLS; j++) {
            func(input);
        }

        var duration = process.hrtime(startTime);
        duration = (duration[0] * 1e9 + duration[1]) / 1e3 / NUM_CALLS;

        total += duration;
    }

    return (total / NUM_TRIALS);
}

// dont count first call
var jsonObj = JSON.parse(jsonStr);
var bignumObj = bignumJSON.parse(jsonStr);
JSON.stringify(jsonObj);
bignumJSON.stringify(bignumObj);

console.log('\n==========================================================');
console.log('  Time is averaged over ' + NUM_TRIALS + ' trials where the function');
console.log('  is called ' + NUM_CALLS + ' times.');
console.log('==========================================================\n');

var duration = runTest(JSON.parse, jsonStr);
console.log('JSON.parse():              ' + duration.toString() + ' microseconds/call');

duration = runTest(bignumJSON.parse, jsonStr);
console.log('bignumJSON.parse():        ' + duration.toString() + ' microseconds/call');

console.log();

duration = runTest(JSON.stringify, jsonObj);
console.log('JSON.stringify():          ' + duration.toString() + ' microseconds/call');

duration = runTest(bignumJSON.stringify, bignumObj);
console.log('bignumJSON.stringify():    ' + duration.toString() + ' microseconds/call');

console.log();