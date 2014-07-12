module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    copy: {
      nonGeneratedFiles: {
        files: [
          {
            expand: true,
            cwd: 'ng-src/main',
            src: [
              'css/**',
              'fonts/**',
              'html/**',
              'js/**',
              '!js/custom/**'
            ],
            dest: '<%= grunt.option("buildDir") %>/ng-dist/resources'
          }
        ]
      }
    },
    
    jshint: {
      custom: [
        'Gruntfile.js',
        'ng-src/main/js/custom/*.js',
        'ng-src/test/js/custom/*.js'
      ]
    },
    
    csslint: {
      custom: {
        options: {
          import: 2
        },
        src: 'ng-src/main/css/custom/*.css'
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      custom: {
        src: [
          'ng-src/main/js/custom/app.js',
          'ng-src/main/js/custom/config.js',
          'ng-src/main/js/custom/listener.js',
          'ng-src/main/js/custom/directive.js',
          'ng-src/main/js/custom/controller.js',
          'ng-src/main/js/custom/service.js',
          'ng-src/main/js/custom/menu.js'
        ],
        dest: '<%= grunt.option("buildDir") %>/ng-dist/resources/js/custom/all.js',
      }
    },
    
    uglify: {
      custom: {
        files: {
          '<%= grunt.option("buildDir") %>/ng-dist/resources/js/custom/all.min.js': [ '<%= concat.custom.dest %>' ]
        }
      }
    },
    
    jasmine: {
      custom: {
        src: [
          'ng-src/main/js/jquery/jquery.js',
          'ng-src/main/js/angular/angular.js',
          'ng-src/main/js/angular/angular-route.js',
          'ng-src/main/js/angular-xeditable/xeditable.js',
          'ng-src/test/js/angular/angular-mocks.js',
          'ng-src/main/js/custom/*.js'
        ],
        options: {
          specs: 'ng-src/test/js/**/*.spec.js',
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: '<%= grunt.option("buildDir") %>/reports/jasmine/custom/coverage.json',
            report: '<%= grunt.option("buildDir") %>/reports/jasmine/custom'
          }
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default tasks
  grunt.registerTask('default', [
    'copy', 'jshint', 'csslint', 'concat', 'uglify', 'jasmine' ]);

};
