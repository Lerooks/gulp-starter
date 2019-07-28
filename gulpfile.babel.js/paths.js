/*
 *
 *
 *      ██████╗  █████╗ ████████╗██╗  ██╗███████╗
 *      ██╔══██╗██╔══██╗╚══██╔══╝██║  ██║██╔════╝
 *      ██████╔╝███████║   ██║   ███████║███████╗
 *      ██╔═══╝ ██╔══██║   ██║   ██╔══██║╚════██║
 *      ██║     ██║  ██║   ██║   ██║  ██║███████║
 *      ╚═╝     ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝
 *
 *
 */

// src
export const src = './src';

// dest
export const dest = './dist';

// css
export const css = {
  watch: `${src}/scss/**/*.scss`,
  src: `${src}/scss/style.scss`,
  dest: `${dest}/css/`
};

// html
export const html = {
  watch: `${src}/**/*.html`,
  src: `${src}/**/*.html`,
  dest: `${dest}`
};

export const js = {
  watch: `${src}/js/**/*.js`,
  src: `${src}/js/main.js`,
  dest: `${dest}/js/`
};
