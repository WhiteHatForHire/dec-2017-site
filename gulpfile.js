var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
sass = require('gulp-sass');


gulp.task('default', function(){
    console.log('This is a gulp task!')
});

// gulp.task('html', function(){
//     console.log('Imagine something useful being done to the html')
// });





gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp2/styles'));
});


gulp.task('sass', function () {
    return gulp.src('./app/assets/styles**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./app/assets/'));
  });

//   gulp.task('prefix', function(){
//     return gulp.src('./app/temp/styles/style.css')
//     .pipe(postcss([cssvars, nested, autoprefixer]))
//     .pipe(gulp.dest('./app/temp/styles_prefixed'));
// });

gulp.task('watch', function(){
    
    // watch('./app/index.html', function(){
    //     gulp.start('html');
    // });

    watch('./app/assets/styles**/*.scss', function(){
        gulp.start('sass');
    });

    watch('./app/assets/styles**/*.css', function(){
        gulp.start('styles');
    });

    

    // watch('./app/temp/styles**/*.css', function(){
    //     gulp.start('prefix');
    // });

    
});