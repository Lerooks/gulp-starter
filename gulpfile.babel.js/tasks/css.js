/*
 *
 *
 *
 *       ██████╗███████╗███████╗
 *      ██╔════╝██╔════╝██╔════╝
 *      ██║     ███████╗███████╗
 *      ██║     ╚════██║╚════██║
 *      ╚██████╗███████║███████║
 *       ╚═════╝╚══════╝╚══════╝
 *
 *
 *
 *
 */

import { src, dest } from 'gulp';
import { css as path } from '../paths';
import { stream } from './serve';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import notify from 'gulp-notify';
import { error } from './msg';

notify.logLevel(0);

/**
 *
 * Task to compile Sass files
 *
 */
const css = done => {
  src(path.src)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'compressed'
      })
    )
    .on('error', err => {
      error(err.formatted);
    })
    .on(
      'error',
      notify.onError({
        title: `Failed to Process File <%= error.file %>`,
        message: '<%= error.formatted %>',
        sound: false
      })
    )
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(sourcemaps.write('.'))
    .pipe(dest(path.dest))
    .pipe(stream());
  done();
};

export default css;
