var gulp = require('gulp');
var gulpless = require('gulp-less');



gulp.task('lesstocss', function() {
    var srcfile = './grid.less';
    var temp = './dist/grid.css';
    return gulp
        .src(srcfile)
        .pipe(gulpless())
        .pipe(gulp.dest(temp));

});