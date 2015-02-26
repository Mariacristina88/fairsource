'use strict';

module.exports = function(grunt){

require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch: {
    		html: {
		        files: ['index.html'],
		        tasks: ['htmlhint']
    			},
    		js: {
		        files: ['/js/my-js/*.js'],
		        tasks: ['uglify']
    		}
		},

		cssc: {
		    build: {
		        options: {
		            consolidateViaDeclarations: true,
		            consolidateViaSelectors:    true,
		            consolidateMediaQueries:    true
		        },
		        files: {
		            'build/css/master.css': 'build/css/master.css'
		        }
		    }
		},

		cssmin: {
			build: {
			    src: 'build/css/master.css',
			    dest: 'build/css/master.css'
			}
		},

		sass: {
			build: {
			    files: {
			        'build/css/master.css': 'assets/sass/master.scss'
			    }
			}
		},

		uglify: {
		    build: {
		        files: {
		            'build/js/base.min.js': ['js/my-js/*.js']
		        }
		    }
		},

		jshint: {
      		files: ['js/my-js/*.js'],
      		options: { jshintrc: '.jshintrc',
	        	globals: {  
		           
	        	},
	        	ignores : []
      		}
    	},

        htmlhint: {
		    build: {
		        options: {
		            'tag-pair': true,
		            'tagname-lowercase': true,
		            'attr-lowercase': true,
		            'attr-value-double-quotes': true,
		            'doctype-first': true,
		            'spec-char-escape': true,
		            'id-unique': true,
		            'head-script-disabled': true,
		            'style-disabled': true
		        },
		        src: ['index.html']
		    }

		}
    });
	
	grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('fairsource', ['jshint', 'uglify']);
 
};