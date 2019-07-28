import { watch as gulpWatch } from 'gulp';
import * as path from '../paths';
import { default as css } from './css';
import js from './js';
import html from './html';

/**
 * Tasks to Watch
 */
const tasks = {
  css: css,
  html: html,
  js: js
};

const watcher = (type, task) => {
  gulpWatch(path[type].watch, task);
};

/**
 * Watch files and run a task when a change occurs
 */
export default function watch(done) {
  let keys = Object.keys(tasks),
    i;

  for (i = 0; i < keys.length; i++) {
    watcher(keys[i], tasks[keys[i]]);
  }

  done();
}
