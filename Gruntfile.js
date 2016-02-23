module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['Gruntfile.js', 'scripts/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    wiredep: {
      task: {
        src: [
          'scripts/**/*.js',
          'styles/**/*.css'
        ],
        exclude: ['bootstrap.js'],
        options: {
          bowerrc: '.bowerrc'
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>', 'styles/**/*.css'],
      tasks: ['jshint', 'wiredep']
    }

  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'wiredep']);

};
