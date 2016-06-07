module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

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

  });

  grunt.loadNpmTasks('grunt-babel');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['babel']);

};
