import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Toast from "vue3-toastify";
import "./assets/reset.css";

const app = createApp(App);

app.use(router);
app.use(Toast);

app.mount('#app');