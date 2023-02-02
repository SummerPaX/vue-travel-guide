import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
	{ name: "home", path: "/", component: Home },
	//{ name: "Destination", path: "/destination/:id", component: Destination },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
