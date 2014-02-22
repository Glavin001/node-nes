module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        simplemocha: {
            all: {
                src: ['test/tests.js']
            }
        },
        watch: {
          scripts: {
            files: ['source/**/*.js', 'test/**/*.js'],
            tasks: ['simplemocha'],
            options: {
              spawn: true
            }
          }
        },
        jshint: {
            source: {
                src: "source/*.js"
            }
        },
    });

    // For this to work, you need to have run `npm install grunt-simple-mocha`
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Add a default task. This is optional, of course :)
    grunt.registerTask('test', ['simplemocha']);
    grunt.registerTask('default', ['simplemocha', 'watch']);
};    