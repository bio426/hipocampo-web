<template>
	<div id="Bilboard">
		<router-link class="show" to="">
			<img src="@/assets/images/banner1.jpg" />
		</router-link>
		<router-link to="/catalog">
			<img src="https://picsum.photos/201/300" />
		</router-link>
		<router-link to="">
			<img src="https://picsum.photos/202/300" />
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
			setInterval(change, 3000)
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
