var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default', function(){
    console.log('This is a gulp task!')
});

gulp.task('html', function(){
    console.log('Imagine something useful being done to the html')
});

gulp.task('styles', function(){
    console.log('Imagine Sass or PostCssTasks Running Here');
});

gulp.task('watch', function(){
    
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });
});