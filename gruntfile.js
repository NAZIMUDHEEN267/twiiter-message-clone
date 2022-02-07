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
            cwd: 'public/build/css/copy',
            src: ['*.css'],
            dest: 'public/build/css/',
            ext: '.min.css',
          },
        ],
      }
    },

    // js minification task
    uglify: {
      my_target: {
        files: [
          {
            expand: true,
            cwd: 'public/build/js/',
            src: '*.js',
            dest: 'public/build/js/',
            ext: '.min.js',
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
        dest: 'public/build/js/comment.min.js',
      },
    },

    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'public/css/',
            src: ['comment.css', 'login.css', 'sign-up.css', '!.css.map'],
            dest: 'public/build/css/copy',
          },
        ],
      },
    },

    // image minification
    imagemin: {
      dynamic: {
        files: [{
          cwd: 'public/Assets/',
          expand: true,
          src: ['*.{png,jpg,gif}'],
          dest: 'public/Assets/copy/'
        }]
      }
    },

    // watch task
    watch: {
      cssmin: {
        files: ['public/build/css/css.min.css'],
        tasks: ['cssmin'],
      },

      uglify: {
        files: [
          'public/build/js/*js',
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
        files: ['public/javascript/comment/*.js'],
        tasks: ['concat'],
      },
      imagemin: {
        files: ['public/Assets/*.jpg'],
        tasks: ['imagemin'],
      },
    },
  });

  // tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-eslint');

  // register task to grunt
  grunt.registerTask('default', [
    'watch:cssmin',
    'watch:uglify',
    'watch:sass',
    'watch:eslint',
    'watch:concat',
    'watch:copy',
    'watch:imagemin',
  ]);
};
