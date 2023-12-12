/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import VueCountdown from '@chenfengyuan/vue-countdown';

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
    .use(VueCountdown)
}
