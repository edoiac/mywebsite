const { dest, src, watch, series, parallel } = require("gulp");
const minify = require('gulp-minify');
const sourcemaps = require('gulp-sourcemaps');
const sass = require("gulp-dart-sass");
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const del = require('del');

let isDevBuild = true;
const distDir = './docs/';
const srcDir = './src/';

const clean = async () => {
    return await del(distDir, { force: true });
}

const assets = () => {
    return src(srcDir + "assets/**/*")
        .pipe(dest(distDir + "assets"))
}

const html = () => {
    return src(srcDir + "**/*.html")
        .pipe(dest(distDir))
}

const js = (isDevBuild) => {
    let source = src(srcDir + "**/*.js")
    if (isDevBuild) source = source.pipe(sourcemaps.init())
    source = source.pipe(minify())
    if (isDevBuild) source = source.pipe(sourcemaps.write())
    return source.pipe(dest(distDir))
}

const scss = () => {
    return src(srcDir + "**/*.scss")
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(dest(distDir));
}

const taskImpl = () => {
    return series(clean, parallel(assets, html, js, scss));
}

const serve = () => {
    isDevBuild = true;
    watch(srcDir + "**/*").on('change', taskImpl());
    browserSync.init({
        server: {
            baseDir: distDir
        }
    });
    watch(distDir + "**/*").on('change', browserSync.reload);
}

const build = () => {
    isDevBuild = false;
    return taskImpl()
}

exports.build = build();
exports.default = series(taskImpl(), serve);