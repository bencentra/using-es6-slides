##  Example: Grunt

Install [grunt-babel](https://github.com/babel/grunt-babel) in your project:

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

You're probably already using Grunt for unit tests, concatenation, minification, maybe even compiling Coffeescript!

Babel maintains the `grunt-babel` plugin to add transpilation to your existing build workflow.

Install the dependencies and create a `.babelrc` file.
