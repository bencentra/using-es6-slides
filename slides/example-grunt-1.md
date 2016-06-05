##  Example: [Grunt](https://github.com/bencentra/using-es6-slides/tree/master/examples/grunt-amd)

Install dependencies:

```bash
npm install --save-dev grunt-babel babel-preset-es2015
```

Create a `.babelrc` file with the [ES2015 preset](http://babeljs.io/docs/plugins/preset-es2015/):

```json
{
  "presets": ["es2015"]
}
```

Note:

Babel maintains the `grunt-babel` plugin to add transpilation to your existing build workflow.

Install the dependencies and create a `.babelrc` file.
