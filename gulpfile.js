const {series, src, dest} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const base64 = require('gulp-base64');
const cssmin = require('gulp-cssmin');

function compile() {
    return src('./src/index.scss')
        .pipe(sass.sync())
        .pipe(autoprefixer({
            browsers: ["last 2 versions", "> 1%", "not ie <= 8"],
            cascade: false
        }))
        .pipe(base64({
            baseDir: './src/images'
        }))
        .pipe(cssmin())
        .pipe(dest('./dist'));
}

exports.build = series(compile);