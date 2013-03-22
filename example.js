var bignumJSON = require('./lib');

var dec1 = new bignumJSON.Decimal('0.1');
var dec2 = new bignumJSON.Decimal('0.2');
var decSum = dec1.add(dec2);
console.log('0.1 + 0.2 = ' + decSum.toString());

var int1 = new bignumJSON.BigInt('10');
var int2 = new bignumJSON.BigInt('10');
var intSum = int1.add(int2);
console.log('10 + 10 = ' + intSum.toString());

var testDec = '{"normal":-922337203.234,"big":-9223372036854775807.4237482374983253298159}';
console.log('\ntestDec:                   ' + testDec);
console.log('JSON.parse(testDec):       ' + JSON.stringify(JSON.parse(testDec)));
console.log('bignumJSON.parse(testDec): ' + bignumJSON.stringify(bignumJSON.parse(testDec)));

var testInt = '{"normal":-922337203,"big":-92233720368547758074237482374983253298159}';
console.log('\ntestInt:                   ' + testInt);
console.log('JSON.parse(testInt):       ' + JSON.stringify(JSON.parse(testInt)));
console.log('bignumJSON.parse(testInt): ' + bignumJSON.stringify(bignumJSON.parse(testInt)));
