import { applyBgBlur } from './utils.js';
import { App } from './app.js';

new App();

applyBgBlur();
window.addEventListener('resize', applyBgBlur);
