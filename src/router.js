import { createRouter, createWebHistory } from "vue-router"
import index from "@/views/index.vue"

const routes = [
	{ path: "/", component: index },
	{ path: "/test", component: () => import("@/views/test.vue") },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
