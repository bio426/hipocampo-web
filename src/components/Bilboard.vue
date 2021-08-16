<template>
	<div id="Bilboard">
		<router-link class="show" to="/catalog">
			<img src="@/assets/images/banner1.jpg" alt="imagen publicitaria" />
		</router-link>
		<router-link to="/catalog">
			<img src="@/assets/images/banner2.png" alt="imagen publicitaria" />
		</router-link>
	</div>
</template>

<script>
import { onMounted } from "vue"

export default {
	name: "Bilboard",
	setup() {
		let banners
		let active = 0
		onMounted(() => {
			let slider = document.getElementById("Bilboard")
			banners = slider.children
			setInterval(change, 6000)
		})

		function change() {
			banners[active].classList.remove("show")
			if (active < banners.length - 1) {
				active++
			} else {
				active = 0
			}
			banners[active].classList.add("show")
		}

		return {

		}
	},
}
</script>

<style src="@/assets/styles/Bilboard.scss"></style>
