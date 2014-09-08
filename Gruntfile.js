var mozjpeg = require('imagemin-mozjpeg');

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin : {
            jpg: {
                options: {
                    progressive: true,
                    optimizationLevel : 7
                },
                files: [
                    {
                        expand: true,
                        cwd: 'bg-original/',
                        src: ['**/*.jpg'],
                        dest: 'bg',
                        ext: '.jpg'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);
};