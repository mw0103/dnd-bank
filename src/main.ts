import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./../node_modules/bulma/css/bulma.css";
import VueApexCharts from 'vue3-apexcharts'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(router, VueApexCharts,VueAxios,axios).mount("#app");