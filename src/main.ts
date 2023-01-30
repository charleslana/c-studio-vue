import 'mdb-vue-ui-kit/css/mdb.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import './main.css';
import handleWarn from './utils/utils';

handleWarn();
createApp(App).mount('#app');
