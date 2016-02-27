
module.exports = grunt => {

  require('time-grunt')(grunt);

  grunt.initConfig({

    clean: {
      build: {
        src: ['.tmp/*']
      }
    },

    compass: {
      dist: {
        options: {
          sassDir: 'styles',
          cssDir: '.tmp/styles'
        }
      }
    },

    copy: {
      main: {
        expand: true,
        src: 'scripts/*',
        dest: '.tmp'
      }
    },

    jscs: {
      src: 'scripts/**/*.js',
      options: {
        config: '.jscsrc'
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'scripts/**/*.js', 'test/**/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    watch: {
      files: ['<%= jshint.files %>', 'styles/**/*.css'],
      tasks: ['newer:jshint', 'wiredep', 'newer:sass', 'newer:jscs']
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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['clean', 'compass', 'copy', 'jscs', 'jshint', 'wiredep']);
};
