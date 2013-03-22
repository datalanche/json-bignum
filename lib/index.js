var bignumJSON = require('./json.js');

exports.BigInt = require('./bigint.js');
exports.Decimal = require('./decimal.js');
exports.parse = bignumJSON.parse;
exports.stringify = bignumJSON.stringify;
