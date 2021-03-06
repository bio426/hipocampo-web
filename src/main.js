import { createApp } from "vue"
import App from "./App.vue"
import router from "@/router.js"
import store from "./store"

import "./firebase"

import "notyf/notyf.min.css"

createApp(App).use(router).use(store).mount("#app")
