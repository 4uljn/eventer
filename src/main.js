import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const app = createApp(App);

app.use(store);
app.use(router);

// Registra il componente globalmente
app.component('vue-slider', VueSlider);
app.component('VueDatePicker', VueDatePicker);

app.mount('#app');
