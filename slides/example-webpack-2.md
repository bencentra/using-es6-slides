##  Example: Webpack 2

Update your Webpack config to include `babel-loader`:

```js
module.exports = {
  ...
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  }
};
```

Run `webpack` to bundle and transpile:

```bash
webpack
```



Note:

Webpack lets you configure multiple loaders for different file types. Add the `babel-loader` to transpile all `.js` files.

Run the `webpack` command to create the bundle with the transpiled code.
