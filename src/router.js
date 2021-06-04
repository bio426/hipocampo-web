import { createRouter, createWebHistory } from "vue-router"
import index from "@/views/index.vue"

const routes = [
	{ path: "/", component: index },
	{ path: "/catalog", component: () => import("@/views/catalog.vue") },
	{ path: "/book", component: () => import("@/views/book.vue") },
	{ path: "/cart", component: () => import("@/views/cart.vue") },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
