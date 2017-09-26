'use strict';

const lodash = require('lodash')
const get = lodash.get
const unsupported = {
  'Object': {
    name: 'Object',
    methods: ['assign', 'is', 'getOwnPropertySymbols'],
    constants: []
  },
  'Array': {
    name: 'Array',
    methods: ['from', 'of'],
    constants: []
  },
  'String': {
    name: 'String',
    methods: ['raw', 'fromCodePoint'],
    constants: []
  },
  'Math': {
    name: 'Math',
    methods: ['clz32', 'imul', 'sign', 'hypot', 'cbrt', 'fround', 'trunc', 'atanh', 'asinh', 'acosh', 'tanh', 'sinh', 'cosh', 'expm1', 'log1p', 'log2', 'log10'],
    constants: []
  },
  'Number': {
    name: 'Number',
    methods: ['parseInt', 'parseFloat', 'isFinite', 'isSafeInteger', 'isNaN', 'isInteger'],
    constants: ['MIN_SAFE_INTEGER', 'EPSILON', 'MAX_SAFE_INTEGER']
  }
}

module.exports = {
  create: function(context) {
    return {
      MemberExpression: function (node) {
        const obj = get(node, 'object.name')
        const prop = get(node, 'property.name')
        // context.report will report a linting problem
        const info = unsupported[obj]
        if (!info) return;
        const constants = info.constants
        if (constants.indexOf(prop) > -1) {
          context.report(node, `Constant ${prop} not supported by IE 11`);
        }
      },

      CallExpression: function(node) {
        const obj = get(node, 'callee.object.name')
        const prop = get(node, 'callee.property.name')
        // context.report will report a linting problem
        const info = unsupported[obj]
        if (!info) return;
        const constants = info.methods
        if (constants.indexOf(prop) > -1) {
          context.report(node, `Method ${prop} not supported by IE 11`);
        }
      }
    }
  }
};
