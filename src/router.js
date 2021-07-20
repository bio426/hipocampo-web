import { createRouter, createWebHistory } from "vue-router"
import index from "@/views/index.vue"
// import building from "@/views/building.vue"

const routes = [
	// { path: "/", name: "building", component: building },
	{ path: "/", name: "index", component: index },
	{ path: "/catalog", name: "catalog", component: () => import("@/views/catalog.vue") },
	{ path: "/book/:id", name: "book", component: () => import("@/views/book.vue") },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
