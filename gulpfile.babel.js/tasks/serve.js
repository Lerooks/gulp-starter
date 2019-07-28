import browserSync from 'browser-sync';
import { env } from '../env';
import { ready } from './msg';

/**
 *
 * Reload the Browser
 */
export const reload = done => {
  browserSync.reload();

  done();
};

export const stream = browserSync.stream;

/**
 *
 * Task to run BrowserSync
 */
export const serve = done => {
  ready();

  browserSync.init({
    logPrefix: env.PROJECT_NAME || 'BrowserSync',
    notify: false,
    logConnections: false,
    logLevel: 'info',
    server: {
      baseDir: './dist'
    }
  });

  done();
};
