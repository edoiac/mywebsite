const { dest, src, watch } = require("gulp");
const minify = require('gulp-minify');
const sourcemaps = require('gulp-sourcemaps');
const sass = require("gulp-dart-sass");
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();



function html() {
    return src("./src/**/*.html")
    .pipe(dest("./dist/"))
}

function js() {
    return src("./src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(minify())
    .pipe(sourcemaps.write())
    .pipe(dest("./dist/"))
}

function scss() {
	return src("./src/**/*.scss")
        .pipe(sass())
        .pipe(cleanCSS())
		.pipe(dest("./dist/"));
}

function serve() {
    watch("./src/**/*.html").on('change', html);
    watch("./src/**/*.js").on('change', js);
    watch("./src/**/*.scss").on('change', scss);
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    watch("./dist/**/*").on('change', browserSync.reload);
}

exports.default = serve;