var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch'),
	shell = require('gulp-shell');

var scripts = [
	'public/bower_components/jquery/dist/jquery.min.js',
	'public/bower_components/angular/angular.min.js',
	'public/bower_components/angular-animate/angular-animate.min.js',
	'public/bower_components/angular-ui-router/release/angular-ui-router.min.js',
	'public/bower_components/lodash/dist/lodash.min.js',
	'public/bower_components/restangular/dist/restangular.min.js',
	'public/bower_components/velocity/jquery.velocity.min.js',
	'public/bower_components/velocity/velocity.ui.min.js',
	'public/js/**/*.js',
	'public/js/app.js'
];

gulp.task('express', function(){
 var express = require('express');
  var app = express();
  app.use(require('connect-livereload')());
  app.use(express.static(__dirname + '/public'));
  app.listen(4000);
});

gulp.task('shorthand', shell.task('stubby -wd api/config.yml'));

gulp.task('scripts', function(){
	gulp.src(scripts)
		.pipe(concat('all.js'))
		.pipe(gulp.dest('public'))
		.pipe(livereload());
});

gulp.task('html', function(){
	gulp.src('public/**/**/*.html')
		.pipe(livereload());
});

gulp.task('css', function(){
	gulp.src('public/css/**/*.css')
		.pipe(livereload());
});

gulp.task('watch', function(){
	gulp.watch(scripts, ['scripts']);
	gulp.watch('public/**/*.html', ['html']);
	gulp.watch('public/css/**/*.css', ['css']);
});

gulp.task('default', ['express', 'shorthand', 'scripts', 'watch'], function(){

});
