json-bignum
===========

Node.js JSON replacement which handles 64-bit integers and arbitrary-precision decimals. It is a modified version of [Douglas Crockford's JSON library](https://github.com/douglascrockford/JSON-js). Although it can handle 64-bit integers and arbitrary-precision decimals, it is slower than the built-in JSON functions. It uses [BigDecimal.js](https://github.com/iriscouch/bigdecimal.js) to handle big integers and decimals which is a literal port of Java's ```BigInteger``` and ```BigDecimal``` classes.

## Install

    $ npm install json-bignum

## Usage

### parse()

```js
var bignumJSON = require('json-bignum');

var obj = bignumJSON.parse('{ "decimal": -9223372036854775807.4237482374983253298159 }');
```

### stringify()

```js
var bignumJSON = require('json-bignum');

var obj = {
    bigint: new bignumJSON.BigInt('92233720368547758074237482374983253298159'),
    decimal: new bignumJSON.Decimal('-9223372036854775807.4237482374983253298159'),
};

console.log(bignumJSON.stringify(obj));
```

## Caveats

It is not recommended to mix calls to ```JSON``` and ```bignumJSON```. For example, ```JSON.stringify()``` does not know how to parse ```BigInt``` and ```Decimal```.

## Benchmark

Below shows the result of the benchmark on my machine.

    $ node benchmark.js
    $ 10000 calls of JSON.parse():                                   26.236455 ms
    $ 10000 calls of JSON.stringify():                               20.933563 ms
    $ 10000 calls of bignumJSON.parse() with bignums in JSON:        3282.439873 ms
    $ 10000 calls of bignumJSON.parse() without bignums in JSON:     139.789558 ms
    $ 10000 calls of bignumJSON.stringify() with bignums in JSON:    259.762923 ms
    $ 10000 calls of bignumJSON.stringify() without bignums in JSON: 71.07643 ms
