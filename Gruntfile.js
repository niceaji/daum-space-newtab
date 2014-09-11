var mozjpeg = require('imagemin-mozjpeg');

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            jpg: {
                options: {
                    progressive: true,
                    optimizationLevel: 7
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
        },
        compress: {
            main: {
                options: {
                    archive: 'chrome.zip'
                },
                files: [
                    {
                        expand: true,
                        src: [
                            'bg/*',
                            'css/**/*',
                            'js/*',
                            'daum.js',
                            'icon.png',
                            'index.html',
                            'manifest.json'
                        ],
                        dest: '.'
                    }
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', ['compress']);
};