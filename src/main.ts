import { createApp } from "vue";
import { createPinia, setActivePinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./../node_modules/bulma/css/bulma.css";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { useUserStore } from "./stores/UserStore";

const pinia = createPinia();
router.beforeEach(()=>{
    setActivePinia(pinia);
    
})

createApp(App).use(router, VueAxios,axios).mount("#app");