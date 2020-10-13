import { createApp } from 'vue';
import App from './App';
import router from './router';
import store from './store';

import './index.less';

createApp(App).use(store).use(router).mount('#app');
