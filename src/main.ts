// @todo resolve issue with virtual imports
/* eslint-disable import/no-unresolved */
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import 'virtual:windi.css';
import 'virtual:windi-devtools';

import './assets/css/index.css';

const app = createApp(App);

app.use(router);

app.mount('#app');
