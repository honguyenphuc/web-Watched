import { createApp } from 'vue';
import App from './App.vue';

import router from '../src/router/index';
import AppModal from '../src/products/AppModal.vue'

const app = createApp(App)
app.use(router);
app.component("app-modal",AppModal),
app.mount('#app');



