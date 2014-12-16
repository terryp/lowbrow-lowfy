module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      main: {
        src: 'bin/tryit.js',
        dest: 'public/javascripts/main.js'
      }
    },
    uglify: {
      options: {
        sourceMap: true,
        report: 'gzip'
      },
      main: {
        src: 'public/javascripts/main.js',
        dest: 'public/javascripts/main.min.js'
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', function() {
    console.log("I'm a default task, and do nothing");
  });

};
