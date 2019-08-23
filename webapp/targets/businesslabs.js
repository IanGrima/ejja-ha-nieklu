/**
 * Defines the additional grunt configuration and build steps for the Business Labs application.
 */
module.exports = function (grunt) {
    grunt.config.merge({
        replace: {
            apiPrefix: {
                src: ['<%= yeoman.dist %>/scripts/*.js'],
                overwrite: true,
                replacements: [{
                        from: 'http://localhost:5000',
                        to: '//casumo-ejja-ha-nieklu.herokuapp.com'
                    }]
            },
            titles: {
                src: ['<%= yeoman.dist %>/*.html', '<%= yeoman.dist %>/views/*.html'],
                overwrite: true,
                replacements: [{
                        from: '<!--APP_TITLE-->Ejja Ħa Nieklu',
                        to: 'Ejja Ħa Nieklu'
                    }, {
                        from: '<!--APP_SUBTITLE-->Test App',
                        to: 'Business Labs'
                    }]
            },
            logos: {
                src: ['<%= yeoman.dist %>/*.html', '<%= yeoman.dist %>/views/*.html'],
                overwrite: true,
                replacements: [{
                        from: 'images/front-logo.png',
                        to: 'images/business-labs-logo.png'
                    }]
            }
        }
    });

    return [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'ngmin',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'replace',
        'rev',
        'usemin',
    ];
};
