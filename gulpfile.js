var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
	console.log('Th Default task is working');
});

gulp.task('html', function(){
	console.log('HTML task is ok');
});

gulp.task('watch', function(){

	watch('./app/index.html', function(){
		gulp.start('html');
	});

});
/*added a comment*/