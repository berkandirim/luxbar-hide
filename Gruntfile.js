module.exports = function(grunt) {
    
    grunt.initConfig({
        watch: {
            js: {
                files: 'lib/*.js',
                tasks: ['uglify', 'copy', 'jshint']
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
        },
        uglify: {
            target: {
                files: {
                    'dist/luxbar-hide.min.js': ['lib/luxbar-hide.js']
                }
            },
            options: {
                sourceMap: true
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'lib', src: ['luxbar-hide.js'], dest: 'dist/'}
                ]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'dist/*.js',
                        'demo/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    notify: false,
                    server: {
                        baseDir: './'
                    },
                    browser: "google chrome"
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt, {pattern: ['grunt-*', '@*/grunt-*']});

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'jshint', 'browserSync', 'watch']);
    grunt.registerTask('build', ['uglify', 'copy']);
};