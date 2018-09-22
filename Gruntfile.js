module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			options: {
				compress: {
					global_defs: {
						"EO_SCRIPT_DEBUG": false
					},
					dead_code: true
				},
				banner: '/*! <%= pkg.title %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */'
			},
			build: {
				files: [{
					expand: true, // Enable dynamic expansion.
					cwd: 'src/',
					src: [
						'*.js',
						'!*.min.js',
					],
					dest: 'dist/',
					ext: '.min.js', // Dest filepaths will have this extension.
				}]
			}
		},

		jshint: {
			options: {
				reporter: require('jshint-stylish'),
				globals: {
					"EO_SCRIPT_DEBUG": false,
				},
				'-W099': true, // Mixed spaces and tabs
				'-W083': true, // Fix functions within loop
				'-W082': true, // Declarations should not be placed in blocks
				'-W020': true, // Read only - error when assigning EO_SCRIPT_DEBUG a value.
			},
			all: [
				'src/*.js',
				'!dist/*.min.js',
			]
		},

		// Copies the plugin to create deployable plugin.
		copy: {
			deploy: {
				src: [
					'**',
					'!.*',
					'!*.md',
					'!.*/**',
					'!.htaccess',
					'!Gruntfile.js',
					'!package.json',
					'!package-lock.json',
					'!releases/**',
					'!node_modules/**',
					'!.DS_Store',
					'!npm-debug.log',
					'!*.zip',
					'!*.jpg',
					'!*.jpeg',
					'!*.gif',
					'!*.png'
				],
				dest: '<%= pkg.name %>',
				expand: true,
				dot: true
			}
		},

		// Compresses the deployable plugin folder.
		compress: {
			zip: {
				options: {
					archive: './releases/<%= pkg.name %>-v<%= pkg.version %>.zip',
					mode: 'zip'
				},
				files: [
					{
						expand: true,
						cwd: './<%= pkg.name %>/',
						src: '**',
						dest: '<%= pkg.name %>'
					}
				]
			}
		},

		// Deletes the deployable plugin folder once zipped up.
		clean: [ '<%= pkg.name %>' ]
	});

	// Set the default grunt command to run test cases.
	grunt.registerTask( 'default', [ 'test' ] );

	// Checks for errors with the javascript and text domain.
	grunt.registerTask( 'test', [ 'jshint' ]);

	// Minify javascript rady for distribution.
	grunt.registerTask( 'build', [ 'newer:uglify' ]);

	// Creates a deployable script zipped up ready to use.
	grunt.registerTask( 'zip', [ 'copy', 'compress', 'clean' ]);
};
