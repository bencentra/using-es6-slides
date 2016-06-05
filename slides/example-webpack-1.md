##  Example: [Webpack](https://github.com/bencentra/using-es6-slides/tree/master/examples/webpack-commonjs)

Install `webpack` and other dependencies:

```bash
npm install -g webpack
npm install --save-dev babel-core babel-loader babel-preset-es2015
```

Create a `.babelrc` file with the [ES2015 preset](http://babeljs.io/docs/plugins/preset-es2015/):

```json
{
  "presets": ["es2015"]
}
```



Note:

Webpack is a versatile module bundler than understands AMD and CommonJS. It can also bundle non-JS assets!

Webpack doesn't replace Grunt entirely, just the concatenation and bundling steps!

Install `webpack` and the required Babel dependencies, including Webpack's loader for babel, `babel-loader`.

Create the `.babelrc` file, same as always.

Code: https://github.com/bencentra/using-es6-slides/tree/master/examples/webpack-commonjs
