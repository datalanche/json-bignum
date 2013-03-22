var BigInteger = require('bigdecimal').BigInteger;

// add ==, !=, >, >=, <, <= operators for convenience

BigInteger.prototype.eq = function(value) {
    return this.compareTo(value) === 0;
};

BigInteger.prototype.neq = function(value) {
    return this.compareTo(value) !== 0;
};

BigInteger.prototype.gt = function(value) {
    return this.compareTo(value) > 0;
};

BigInteger.prototype.gte = function(value) {
    return this.compareTo(value) >= 0;
};

BigInteger.prototype.lt = function(value) {
    return this.compareTo(value) < 0;
};

BigInteger.prototype.lte = function(value) {
    return this.compareTo(value) <= 0;
};

module.exports = BigInteger;
