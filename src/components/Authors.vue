<template>
	<div id="Authors">
		<div class="container-author">
			<h2>Nuestros Autores</h2>
		</div>
		<div class="content">
			<div class="flexbin">
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081767/Fotos%20autores/Gladys_Camere_ooicba.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081757/Fotos%20autores/Johnny_Barbieri_kpqyra.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081602/Fotos%20autores/Rocio_del_Aguila_yo3tjw.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081602/Fotos%20autores/Marco_Martos_b8jjul.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081601/Fotos%20autores/Miguel_Ildefonso_j5uamd.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081601/Fotos%20autores/Roger_Santiv%C3%A1%C3%B1ez_qysjcu.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081596/Fotos%20autores/Nora_Alarc%C3%B3n_ouiget.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081595/Fotos%20autores/Jos%C3%A9_Antonio_Mazzotti_bdiefk.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081594/Fotos%20autores/Johnny_Barbieri_mfejqn.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081594/Fotos%20autores/Feliciano_Mej%C3%ADa_Hidalgo_gkw6xy.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081594/Fotos%20autores/Cecilia_Granadino_gxzriq.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081593/Fotos%20autores/Julio_Le%C3%B3n_ormiz3.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081593/Fotos%20autores/Cronwell_Jara_u6oyeu.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081591/Fotos%20autores/Antonio_Cill%C3%B3niz_exi3du.jpg"
				/>
				<img
					alt="imagen de autor"
					src="https://res.cloudinary.com/hipocampo-editores/image/upload/v1629081591/Fotos%20autores/Willy_G%C3%B3mez_Migliaro_u8tfiu.jpg"
				/>
			</div>
			<div class="info">
				<h3>Familia Hipocampo</h3>
				<hr />
				<p>
					A continuación te presentamos a nuestros autores, los escritores que
					han confiado en nuestra editorial y que saben mejor que nadie cómo
					trabajamos.
				</p>
				<!-- <button>Buscar Obras</button> -->
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue"

export default {
	name: "Authors",
	setup() {
		let authors = ref([])

		return {
			authors,
		}
	},
}
</script>

<style src="@/assets/styles/Authors.scss"></style>
