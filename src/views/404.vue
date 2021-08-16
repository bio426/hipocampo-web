<template>
	<div id="index">
		<Header />
		<div class="container">
			<br />
      <div class="not-found">
        <h1>Pagina no encontrada</h1>
        <router-link to="/">Regresa al inicio</router-link>
      </div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/Header.vue"
import Bilboard from "@/components/Bilboard.vue"
import Footer from "@/components/Footer.vue"

export default {
	name: "404",
	components: {
		Header,
		Bilboard,
		Footer,
	},
	setup() {
	},
}
</script>