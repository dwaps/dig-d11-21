import { applyBgBlur } from './utils.js';
import { App } from './app.js';
import { Router } from './router.js';

new App();
Router.run();

applyBgBlur();
window.addEventListener('resize', applyBgBlur);
