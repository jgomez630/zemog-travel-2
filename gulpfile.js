var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
	console.log('The Default task is working');
});

gulp.task('html', function(){
	console.log('HTML task is ok');
});
gulp.task('styles', function(){
  console.log('css sheet updated');
});

gulp.task('watch', function(){

	watch('./app/index.html', function(){
		gulp.start('html');
	});
  watch('./app/assets/styles/**/*.css', function(){
      gulp.start('styles');
  });

});
/*added a comment*/