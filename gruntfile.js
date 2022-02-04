module.exports = function (grunt) {
  grunt.initConfig({
    // sass task
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'public/sass/5-pages/',
            src: ['*.sass'],
            dest: 'public/css',
            ext: '.css',
          },
        ],
      },
    },

    // css minification task
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: 'public/build/css',
            src: ['main.min.css'],
            dest: 'public/build/css/',
            ext: '.min.css',
          },
        ],
      },
    },

    // js minification task
    uglify: {
      my_target: {
        files: [
          {
            expand: true,
            cwd: 'public/build/js',
            src: 'main.min.js',
            dest: 'public/build/js/',
          },
        ],
      },
    },

    // code styling
    eslint: {
      options: {
        overrideConfigFile: '.eslintrc.json',
        fix: true,
      },
      target: ['**/*.js', '!node_modules/**/*.js'],
    },

    concat: {
      dist1: {
        src: 'public/javascript/comment/*.js',
        dest: 'public/build/js/main.min.js',
      },
      dist2: {
        src: ['public/css/*.css', '!.css.map'],
        dest: 'public/build/css/main.min.css',
      },
    },

    // watch task
    watch: {
      cssmin: {
        files: ['public/build/css/css.min.css'],
        tasks: ['cssmin'],
      },

      uglify: {
        files: [
          'public/build/js/main.min.js',
        ],
        tasks: ['uglify'],
      },

      sass: {
        files: ['public/sass/5-pages/*.sass'],
        tasks: ['sass'],
      },

      eslint: {
        files: ['**/*.js', '!node_modules/**/*.js'],
        tasks: ['eslint'],
      },
      concat: {
        files: ['public/javascript/comment/*.js', 'public/css/*.css', '!.css.map'],
        tasks: ['concat'],
      },
    },
  });

  // tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-eslint');

  // register task to grunt
  grunt.registerTask('default', [
    'watch:cssmin',
    'watch:uglify',
    'watch:sass',
    'watch:eslint',
    'watch:concat',
  ]);
};
