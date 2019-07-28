import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import { dest } from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import notify from 'gulp-notify';
import { js as path } from '../paths';
import { stream } from './serve';
import { error } from './msg';

/**
 * Task to manage js
 */
export default function js(done) {
  browserify({
    entries: path.src,
    debug: true
  })
    .transform(babelify)
    .bundle()
    .on('error', err => {
      error(err);
    })
    .on(
      'error',
      notify.onError({
        title: `Failed to Process File <%= error.filename %>`,
        message: '<%= error %>',
        sound: false
      })
    )
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(path.dest))
    .pipe(stream());
  done();
}
