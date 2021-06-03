<template>
	<div id="Bilboard">
		<img class="show" src="https://picsum.photos/200/300" />
		<img src="https://picsum.photos/201/300" />
		<img src="https://picsum.photos/202/300" />
	</div>
</template>

<script>
import { onMounted } from "vue"

export default {
	name: "Bilboard",
	setup() {
		let images
		let active = 0
		onMounted(() => {
			let slider = document.getElementById("Bilboard")
			images = slider.children
			setInterval(change, 3000)
		})

		function change() {
			images[active].classList.remove("show")
			if (active < images.length - 1) {
				active++
			} else {
				active = 0
			}
			images[active].classList.add("show")
		}

		return {}
	},
}
</script>

<style src="@/assets/styles/Bilboard.scss"></style>
