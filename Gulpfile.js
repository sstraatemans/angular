var gulp    = require('gulp');
var sync    = require('run-sequence');
var browser = require('browser-sync');
var webpack = require('webpack-stream');
var todo    = require('gulp-todoist');
var path    = require('path');
var yargs   = require('yargs').argv;
var tpl     = require('gulp-template');
var rename  = require('gulp-rename');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var phantomcss = require('gulp-phantomcss');



/*
map of paths for using with the tasks below
 */
var paths = {
  entry: 'client/app/app.js',
  app: ['client/app/**/*.{js,html}'],
  js: 'client/app/**/*!(.spec.js).js',
  toCopy: ['client/index.html'],
  html: ['client/index.html', 'client/app/**/*.html'],
  dest: 'dist',
  sass: 'scss/**/*.scss',
  phantomcss: './phantomcss.js',
  blankTemplates: 'templates/component/*.**'
};

gulp.task('todo', function() {
  return gulp.src(paths.js)
    .pipe(todo({silent: false, verbose: true}));
});

gulp.task('build', ['todo'], function() {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('serve', function() {
  browser({
    port: process.env.PORT || 4500,
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    }
  });
});


gulp.task('phantomcss', function (){

  gulp.src(paths.phantomcss)
    .pipe(phantomcss({
      screenshotRoot: 'test'
    }));
});
/*
simple task to copy over needed files to dist
 */
gulp.task('copy', function() {
  gulp.src(paths.toCopy, { base: 'client' })
    .pipe(gulp.dest(paths.dest));

    gulp.src(['node_modules/angular-material/angular-material.min.css'], { base: 'node_modules/angular-material/' })
      .pipe(gulp.dest(paths.dest));
});

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist'));
});

/*
task to watch files for changes and call build and copy tasks
 */
gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', browser.reload]);
  gulp.watch(paths.toCopy, ['copy', browser.reload]);
  gulp.watch(paths.sass, ['sass', browser.reload]);
});

// helper function
var resolveToComponents = function(glob){
  glob = glob || '';
  return path.join('client', 'app/components', glob); // app/components/{glob}
};

gulp.task('component', function(){
  var cap = function(val){
    return val.charAt(0).toUpperCase() + val.slice(1);
  };

  var name = yargs.name;
  var parentPath = yargs.parent || '';
  var destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
    .pipe(tpl({
      name: name,
      upCaseName: cap(name)
    }))
    .pipe(rename(function(path){
      path.basename = path.basename.replace('component', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('default', function(done) {
  sync('build', 'copy', 'serve', 'watch', done)
});
