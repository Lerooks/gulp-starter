# Gulp Starter

## Features

- Gulp with multiple files (v4)
- BrowserSync
- Sass
- Browserify
- Babel
- Sourcemaps

## Instructions

Install dependencies

```bash
yarn install
# or
npm install
```

Start development server

```bash
npm start
# or
yarn start
```

## Folder Structure

```
node_modules/
dist/                       // Build For production, do not work on this folder
src/
├── *.html
├── scss/
│   ├── *.scss
├── js/
│   └── *.js
│── gulpfile.babel.js/
│  ├── tasks/
│  │   └── *.js
│  ├── index.js
│  └── paths.js
│  └── env.js
├── images/
├── fonts/
│   └── *.{eot|svg|ttf|woff}
.babelrc
.editorconfig
.env
.gitignore
.prettierrc
package.json
README.md
```
