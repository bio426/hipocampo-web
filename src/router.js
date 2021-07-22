import { createRouter, createWebHistory } from "vue-router"
import index from "@/views/index.vue"
// import building from "@/views/building.vue"

const routes = [
	// { path: "/", name: "building", component: building },
	{ path: "/", name: "index", component: index },
	{ path: "/catalog", name: "catalog", component: () => import("@/views/catalog.vue") },
	{ path: "/book/:id", name: "book", component: () => import("@/views/book.vue") },
	{ path: "/about", name: "about", component: () => import("@/views/about.vue") },
	{ path: "/examples", name: "examples", component: () => import("@/views/examples.vue") },
	{ path: "/contact", name: "contact", component: () => import("@/views/contact.vue") },
	{ path: "/cart", name: "cart", component: () => import("@/views/cart.vue") },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
