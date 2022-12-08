import { createApp } from "vue"
import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"
import {createRouter, createWebHistory} from 'vue-router'
import App from "./App.vue"
import Login from "./Login.vue"

const router = createRouter({
    history: createWebHistory(),
    routes:[ {
        path: '/', redirect: { name: "login" } }, 
        { path: '/login', name: "login", component: Login},
        { path: '/home', name: "home", component: App}]
});

const app = createApp(App)

app.use(VNetworkGraph)

app.use(router)

app.mount("#app")
