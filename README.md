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
  },
  settings: {
    ieStaticMethodsAllow: {
      // Methods you'd like to ignore linting errors for here
    }
  }
}
```

### Configuring
If you'd like to set specific methods to ignore due to polyfills you can add an
entry in your .eslintrc file. Using the settings objects and providing an array
of methods for each Object type. Example:

```js
// ...
  "settings": {
    "ieStaticMethodsAllow": {
      // Ignore Object.assign and Number.parseFloat
      "Object": ["assign"],
      "Number": ["parseFloat"]
    }
  }
```

That's all! If you have any questions just contact me or create an issue.

Thanks!
