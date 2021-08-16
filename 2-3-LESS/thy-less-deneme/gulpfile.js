var gulp = require("gulp");
var gulpless = require("gulp-less");

gulp.task("lesstocss", function () {
    var srcfile = "./less/main.less";
    var temp = "./dist/main.css";
    return gulp.src(srcfile)
        .pipe(gulpless())
        .pipe(gulp.dest(temp));
});

gulp.task('lessizle', function () {
    gulp.watch("./less/**/*.less", gulp.series('lesstocss'))
})