requirejs.config({
  paths: {
    src: 'dist/src'
  }
});

requirejs(['src/app'], function(App) {
  App = App.default;

  var app = new App();
  app.addManyNumbers(2, 4, 6);

  app = new App(10);
  app.addManyNumbers(3, 5, 7, 9);
});
