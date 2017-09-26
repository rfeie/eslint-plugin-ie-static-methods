# eslint-plugin-ie-static-methods

## Purpose
I got tired of getting bit by compatibility issues with IE11 and while there
were some plugins that did compatibility I didn't see one that covered a
relatively use case: static methods on Number/Object. This plugin will alert you
to those methods that are not supported on Object, Number, Math, Array, and
String.

## Usage
Run: `npm install --save-dev eslint-plugin-ie-static-methods`

To include:
```js
// .eslintrc
{
  // ...
  "plugins": ["ie-static-methods"],
  "rules": {
    // ...
    "ie-static-methods/static-methods": "error"
  }
}
```

That's all! If you have any questions just contact me or create an issue.

Thanks!
