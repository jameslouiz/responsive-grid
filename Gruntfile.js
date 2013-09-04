module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        _project: {
            theme_path: 'public',
            css_path: '<%= _project.theme_path %>/assets/css',
            js_path: '<%= _project.theme_path %>/assets/js'
        },
        sass: {
            dev: {
                options: {
                    style: 'compact',
                    cacheLocation : '<%= _project.css_path %>/.sass-cache'
                },
                files: {
                    '<%= _project.css_path %>/site.css' : '<%= _project.css_path %>/sass/site.scss'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: '<%= _project.js_path %>/site.js',
                dest: '<%= _project.js_path %>/site.min.js'
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            dist: {
                src: ['<%= _project.js_path %>/modules/**/*.js'],
                dest: '<%= _project.js_path %>/site.js'
            }
        },
        watch: {
            css: {
                files: '<%= _project.css_path %>/sass/**/*.scss',
                tasks: ['sass']
            },
            php: {
                files: '<%= _project.theme_path %>/**/*.php'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build_js', ['concat', 'uglify']);
    grunt.registerTask('default', []);
};