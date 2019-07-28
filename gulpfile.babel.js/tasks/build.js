/*
 *
 *
 *      ██████╗ ██╗   ██╗██╗██╗     ██████╗
 *      ██╔══██╗██║   ██║██║██║     ██╔══██╗
 *      ██████╔╝██║   ██║██║██║     ██║  ██║
 *      ██╔══██╗██║   ██║██║██║     ██║  ██║
 *      ██████╔╝╚██████╔╝██║███████╗██████╔╝
 *      ╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝
 *
 *
 */

import { series } from 'gulp';
import { default as jsTask } from './js';
import { default as cssTask } from './css';
import { default as htmlTask } from './html';

export default series(htmlTask, jsTask, cssTask);
