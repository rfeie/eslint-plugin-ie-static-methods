var rule = require('../../../lib/static-methods/static-methods')
var RuleTester = require('eslint').RuleTester;

var ruleTester = new RuleTester();

ruleTester.run('ES6 Numbers', rule, {
  valid: [
    'var validExample;',
    'for(;;) {}',
    'do {} while(condition)',
    'new Number()',
    'Object.prototype',
    'Object.create()'
  ],

  invalid: [
    {
      code: 'Object.assign({}, {})',
      errors: [ { message: 'Method assign not supported by IE 11' } ]
    },
    {
      code: 'Object.is(null, null)',
      errors: [ { message: 'Method is not supported by IE 11' } ]
    },
    {
      code: 'Array.from([])',
      errors: [ { message: 'Method from not supported by IE 11' } ]
    },
    {
      code: 'Array.of([])',
      errors: [ { message: 'Method of not supported by IE 11' } ]
    },
    {
      code: "String.raw({ raw: 'test' }, 0, 1, 2);",
      errors: [ { message: 'Method raw not supported by IE 11' } ]
    },
    {
      code: "String.fromCodePoint(42);",
      errors: [ { message: 'Method fromCodePoint not supported by IE 11' } ]
    },
    {
      code: 'Object.getOwnPropertySymbols({})',
      errors: [ { message: 'Method getOwnPropertySymbols not supported by IE 11' } ]
    },
    {
      code: 'Number.parseInt()',
      errors: [ { message: 'Method parseInt not supported by IE 11' } ]
    },
    {
      code: 'Number.isFinite()',
      errors: [ { message: 'Method isFinite not supported by IE 11' } ]
    },
    {
      code: 'Number.isInteger()',
      errors: [ { message: 'Method isInteger not supported by IE 11' } ]
    },
    {
      code: 'Number.isSafeInteger()',
      errors: [ { message: 'Method isSafeInteger not supported by IE 11' } ]
    },
    {
      code: 'Number.isNaN()',
      errors: [ { message: 'Method isNaN not supported by IE 11' } ]
    },
    {
      code: 'Number.MIN_SAFE_INTEGER',
      errors: [ { message: 'Constant MIN_SAFE_INTEGER not supported by IE 11' } ]
    },
    {
      code: 'Number.MIN_SAFE_INTEGER',
      errors: [ { message: 'Constant MIN_SAFE_INTEGER not supported by IE 11' } ]
    },
    {
      code: 'Number.EPSILON',
      errors: [ { message: 'Constant EPSILON not supported by IE 11' } ]
    },
    {
      code: 'Number.parseFloat()',
      errors: [ { message: 'Method parseFloat not supported by IE 11' } ]
    },
    {
      code: 'Math.clz32()',
      errors: [ { message: 'Method clz32 not supported by IE 11' } ]
    },
    {
      code: 'Math.imul()',
      errors: [ { message: 'Method imul not supported by IE 11' } ]
    },
    {
      code: 'Math.sign()',
      errors: [ { message: 'Method sign not supported by IE 11' } ]
    },
    {
      code: 'Math.log10()',
      errors: [ { message: 'Method log10 not supported by IE 11' } ]
    },
    {
      code: 'Math.log2()',
      errors: [ { message: 'Method log2 not supported by IE 11' } ]
    },
    {
      code: 'Math.log1p()',
      errors: [ { message: 'Method log1p not supported by IE 11' } ]
    },
    {
      code: 'Math.expm1()',
      errors: [ { message: 'Method expm1 not supported by IE 11' } ]
    },
    {
      code: 'Math.cosh()',
      errors: [ { message: 'Method cosh not supported by IE 11' } ]
    },
    {
      code: 'Math.sinh()',
      errors: [ { message: 'Method sinh not supported by IE 11' } ]
    },
    {
      code: 'Math.tanh()',
      errors: [ { message: 'Method tanh not supported by IE 11' } ]
    },
    {
      code: 'Math.acosh()',
      errors: [ { message: 'Method acosh not supported by IE 11' } ]
    },
    {
      code: 'Math.asinh()',
      errors: [ { message: 'Method asinh not supported by IE 11' } ]
    },
    {
      code: 'Math.atanh()',
      errors: [ { message: 'Method atanh not supported by IE 11' } ]
    },
    {
      code: 'Math.trunc()',
      errors: [ { message: 'Method trunc not supported by IE 11' } ]
    },
    {
      code: 'Math.fround()',
      errors: [ { message: 'Method fround not supported by IE 11' } ]
    },
    {
      code: 'Math.cbrt()',
      errors: [ { message: 'Method cbrt not supported by IE 11' } ]
    },
    {
      code: 'Math.hypot()',
      errors: [ { message: 'Method hypot not supported by IE 11' } ]
    }
  ]
});
