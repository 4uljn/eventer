import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import DatePicker from 'vue-datepicker'; // Importa vue-datepicker

const app = createApp(App);

app.use(store);
app.use(router);

// Registra il componente globalmente
app.component('vue-slider', VueSlider);
app.component('date-picker', DatePicker); // Registra anche il componente DatePicker

app.mount('#app');
