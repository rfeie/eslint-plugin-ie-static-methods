"use strict";

const lodash = require("lodash");
const get = lodash.get;
const PLUGIN_SETTINGS_NAME = "ieStaticMethodsAllow";
const unsupported = {
  Object: {
    name: "Object",
    methods: ["assign", "is", "getOwnPropertySymbols"],
    constants: []
  },
  Array: {
    name: "Array",
    methods: ["from", "of"],
    constants: []
  },
  String: {
    name: "String",
    methods: ["raw", "fromCodePoint"],
    constants: []
  },
  Math: {
    name: "Math",
    methods: [
      "clz32",
      "imul",
      "sign",
      "hypot",
      "cbrt",
      "fround",
      "trunc",
      "atanh",
      "asinh",
      "acosh",
      "tanh",
      "sinh",
      "cosh",
      "expm1",
      "log1p",
      "log2",
      "log10"
    ],
    constants: []
  },
  Number: {
    name: "Number",
    methods: [
      "parseInt",
      "parseFloat",
      "isFinite",
      "isSafeInteger",
      "isNaN",
      "isInteger"
    ],
    constants: ["MIN_SAFE_INTEGER", "EPSILON", "MAX_SAFE_INTEGER"]
  }
};

function getSettings(type, context) {
  return get(context, `settings.${PLUGIN_SETTINGS_NAME}.${type}`, []);
}

function prepGetInfo(context, notAllowed) {
  return function getInfo(node, objPath, propPath) {
    const classType = get(node, objPath);
    const prop = get(node, propPath);
    const settings = getSettings(classType, context);
    const obj = notAllowed[classType];
    return {
      prop,
      valid: function(expressionType) {
        return (
          get(obj, expressionType, []).indexOf(prop) > -1 &&
          settings.indexOf(prop) === -1
        );
      }
    };
  };
}

module.exports = {
  create: function(context) {
    const getInfo = prepGetInfo(context, unsupported);
    return {
      MemberExpression: function(node) {
        const { valid, prop } = getInfo(node, "object.name", "property.name");

        if (valid("constants")) {
          context.report(node, `Constant ${prop} not supported by IE 11`);
        }
      },

      CallExpression: function(node) {
        const { valid, prop } = getInfo(
          node,
          "callee.object.name",
          "callee.property.name"
        );

        if (valid("methods")) {
          context.report(node, `Method ${prop} not supported by IE 11`);
        }
      }
    };
  }
};
