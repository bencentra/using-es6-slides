##  Example: Basic

Install some dependencies:

```bash
npm install --save-dev babel-cli babel-preset-es2015
```

Create a `.babelrc` file with the [ES2015 preset](http://babeljs.io/docs/plugins/preset-es2015/):

```json
{
  "presets": ["es2015"]
}
```

Run Babel:

```bash
npm run build # babel src/ -d dist/
```



Note:

All you need is `babel-cli` and the ES2015 preset.

Create a `.babelrc` file to tell Babel what features to transpile, using the ES2015 preset.

To transplie, run the `babel` command (or save to an NPM script)