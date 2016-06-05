##  Example: Grunt 2

Update your `Gruntfile` to configure the `babel` task:

```js
grunt.initConfig({
  ...
  babel: {
    options: {
      babelrc: true
    },
    dist: {
      files: [{
        expand: true,
        src: ['src/**/*.js'],
        dest: 'dist/',
        ext:'.js'
      }]
    }  
  }
  ...
});
```



Note:

Add configuration for the babel task, including which files to transpile.
