var BigDecimal = require('bigdecimal').BigDecimal;

// add ==, !=, >, >=, <, <= operators for convenience

BigDecimal.prototype.eq = function(value) {
    return this.compareTo(value) === 0;
};

BigDecimal.prototype.neq = function(value) {
    return this.compareTo(value) !== 0;
};

BigDecimal.prototype.gt = function(value) {
    return this.compareTo(value) > 0;
};

BigDecimal.prototype.gte = function(value) {
    return this.compareTo(value) >= 0;
};

BigDecimal.prototype.lt = function(value) {
    return this.compareTo(value) < 0;
};

BigDecimal.prototype.lte = function(value) {
    return this.compareTo(value) <= 0;
};

module.exports = BigDecimal;
