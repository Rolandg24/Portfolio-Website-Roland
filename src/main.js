import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Make sure the path matches where your router is defined
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
