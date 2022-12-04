const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const ts = require('gulp-typescript');

gulp.task('sass', function () {
    return gulp.src('styles/scss/*.scss') 
        .pipe(sass())
        .pipe(gulp.dest('styles/css'))
});

// gulp.task('ts',function(){

//     let tsProject = ts.createProject("tsconfig.json");

//     return gulp.src('scripts/ts/*.ts')
//         .pipe(tsProject())
//         .pipe(gulp.dest('scripts/js'));
// })

gulp.task('watch',function () {
    gulp.watch('styles/scss/*.scss').on('change', gulp.series('sass'));
    // gulp.watch('scripts/ts/*.ts').on('change', gulp.series('ts'));
});