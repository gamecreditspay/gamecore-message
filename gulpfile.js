'use strict';

var gulp = require('gulp');
var gamecoreTasks = require('gamecore-build');

gamecoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
