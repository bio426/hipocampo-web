<template>
	<div id="cart">
		<Header />
		<div class="container">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quod ab tempore quo labore aspernatur non quos eos ad, asperiores, blanditiis voluptatum laborum modi vero maxime iusto, atque libero in.</p>
      Cart content
    </div>
		<Footer />
	</div>
</template>

<script>
import {} from "vue"

import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
	name: "cart",
	components: {
		Header,
		Footer,
	},
	setup() {},
}
</script>

<style>
.container {
	width: 80%;
	margin: 0 auto;
}
</style>
