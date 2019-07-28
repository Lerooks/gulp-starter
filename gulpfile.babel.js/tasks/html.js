import { src, dest } from 'gulp';
import { reload } from './serve';
import htmlmin from 'gulp-htmlmin';
import { html as path } from '../paths';

/**
 * HTML Task
 */
const htmlTask = () => {
  return src(path.src)
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .on('error', err => console.log(err))
    .pipe(dest(path.dest))
    .on('end', reload);
};

export default htmlTask;
