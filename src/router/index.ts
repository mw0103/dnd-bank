import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BankEntrance from "../views/BankEntrance.vue";
import InvesmentView from "../views/InvestmentView.vue";
import CreateAccount from "../views/CreateAccountView.vue";
import { useUserStore } from "@/stores/UserStore";
const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/bank",
        name: "bank",
        component: BankEntrance,
        beforeEnter: () => {
            const userStore = useUserStore();
            if(userStore.token == null){
                router.push("/");
            }
        }
    },
    {
        path: "/investment",
        name: "Investments",
        component: InvesmentView,
        beforeEnter: () => {
            const userStore = useUserStore();
            if(userStore.token == null){
                router.push("/");
            }
        }
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path:"/createAccount",
        name: "CreateAccount",
        component:CreateAccount
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;