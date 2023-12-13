import 'vfonts/Lato.css';
// 等宽字体
import 'vfonts/FiraCode.css';

import naive from 'naive-ui';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(naive).use(router).mount('#app');
