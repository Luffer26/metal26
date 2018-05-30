'use strict';

var gulp = require('gulp'),
pug = require('gulp-pug'),
sass = require('gulp-sass'),
concat = require("gulp-concat"),
uglify = require('gulp-uglify'),
plumber = require("gulp-plumber"),
rename = require("gulp-rename"),
cssnano = require('gulp-cssnano'),
sourcemaps = require('gulp-sourcemaps'),
browserSync = require("browser-sync"),
autoprefixer = require("gulp-autoprefixer"),
imagemin = require('gulp-imagemin'),
pngquant = require('imagemin-pngquant'),
wait = require("gulp-wait"),
reload = browserSync.reload;


gulp.task('script',function(){
    return gulp.src("app/js/**/*.js")
    .pipe(plumber()) 
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(uglify()) 
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('build/js'))
})

gulp.task('sass', function () {
    return gulp.src('app/styles/main.sass')
    .pipe(wait(100))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({
        /* outputStyle: 'compressed' */
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cssnano())
    .pipe(rename('main.min.css'))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('build/style'));
});

gulp.task("pug", function() {
    return gulp.src(['app/pages/*.pug'])
        .pipe(plumber())
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('build'))
});

gulp.task('image', function () {
	gulp.src("app/img/**/*.*")
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(gulp.dest("build/img"))
});
gulp.task('font', function () {
	gulp.src('app/fonts/**/*.*')
	.pipe(gulp.dest("build/fonts"))
});

gulp.task('server', function(){
    browserSync({
    server: {
        baseDir: "./build"
    },      
    host: 'localhost',
    port: 9000,
    }); 
});
gulp.task('watch', function () {
    gulp.watch("app/pages/**/*.pug",["pug",reload])
    gulp.watch("app/styles/**/**/*.sass", ["sass",reload])        
    gulp.watch("app/js/**/*.js",["script",reload])
    gulp.watch("build/*.html").on("change", reload);
});

gulp.task('default', ['sass', 'pug', 'font', 'watch','server', 'script'])
