module.exports = function (grunt) {
  grunt.initConfig({
    // sass task
    sass: {
      dist: {
        files: [
          {
            expand: true,
            cwd: "public/sass",
            src: ["*.scss"],
            dest: "public/css",
            ext: ".css",
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
            cwd: "public/css",
            src: ["*.css", "!*.min.css"],
            dest: "public/css/css-min",
            ext: ".min.css",
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
            cwd: "public/javascript",
            src: "*.js",
            dest: "public/javascript/js-min",
          },
        ],
      },
    },

    // find error in code
    eslint: {
      options: {
        overrideConfigFile: ".eslintrc.json",
      },
      target: ["**/*.js", "!node_modules/**/*.js"],
    },

    // watch task
    watch: {
      cssmin: {
        files: ["public/css/.*css"],
        tasks: ["cssmin"],
      },

      uglify: {
        files: ["public/javascript/*.js"],
        tasks: ["uglify"],
      },
      sass: {
        files: ["public/sass/*.scss"],
        tasks: ["sass"],
      },
      eslint: {
        files: ["**/*.js", "!node_modules/**/*.js"],
        tasks: ["eslint"],
      },
    },
  });

  // tasks
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-eslint");

  // register task to grunt
  grunt.registerTask("watching", [
    "watch:cssmin",
    "watch:uglify",
    "watch:sass",
    "watch:eslint",
  ]);
};
