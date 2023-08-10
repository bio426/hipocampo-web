<template>
	<div id="book">
		<Header />
		<section class="indications">
			<div class="container">
				<p>
					Mostrando detalles del libro. /
					<strong>{{ book.name }}</strong>
				</p>
			</div>
		</section>
		<div class="container">
			<section class="bookInfo">
				<img :src="book.image" />
				<div class="bookDescription">
					<h2>{{ book.name }}</h2>
					<span><strong>Autor: </strong>{{ book.author }}</span>
					<h4>Descripción</h4>
					<p>
						{{ book.description }}
					</p>
				</div>
				<!-- <pre>{{ book }}</pre> -->
				<div class="features">
					<ul>
						<li>
							<h5>Categoría</h5>
							<span>{{ formatedCategories || "---" }}</span>
						</li>
						<li>
							<h5>Idioma</h5>
							<span>{{ book.language || "---" }}</span>
						</li>
						<li>
							<h5>N° de páginas</h5>
							<span>{{ book.pages || "---" }}</span>
						</li>
						<li>
							<h5>Año de publicacion</h5>
							<span>{{ book.publishing || "---" }}</span>
						</li>
						<li>
							<h5>Características</h5>
							<span>{{ book.characteristics || "---" }}</span>
						</li>
						<li>
							<h5>Región del autor</h5>
							<span>{{ book.authorOrigin || "---" }}</span>
						</li>
						<li>
							<h5>ISBN</h5>
							<span>{{ book.isbn || "---" }}</span>
						</li>
						<li>
							<h5>N° deposito legal</h5>
							<span>{{ book.legalDeposit || "---" }}</span>
						</li>
						<li>
							<h5>Lugar de edición</h5>
							<span>{{ book.editionPlace || "---" }}</span>
						</li>
					</ul>
					<div class="price">
						<span class="main">S/ {{ book.price }}</span>
						<span class="discount">Descuento de S/ 00.00</span>
						<button disabled>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 450.391 450.391"
							>
								<g>
									<path
										d="M143.673,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02
				c25.969,0,47.02-21.052,47.02-47.02C190.694,371.374,169.642,350.322,143.673,350.322z M143.673,423.465
				c-14.427,0-26.122-11.695-26.122-26.122c0-14.427,11.695-26.122,26.122-26.122c14.427,0,26.122,11.695,26.122,26.122
				C169.796,411.77,158.1,423.465,143.673,423.465z"
									/>
									<path
										d="M342.204,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02s47.02-21.052,47.02-47.02
				C389.224,371.374,368.173,350.322,342.204,350.322z M342.204,423.465c-14.427,0-26.122-11.695-26.122-26.122
				c0-14.427,11.695-26.122,26.122-26.122s26.122,11.695,26.122,26.122C368.327,411.77,356.631,423.465,342.204,423.465z"
									/>
									<path
										d="M448.261,76.037c-2.176-2.377-5.153-3.865-8.359-4.18L99.788,67.155L90.384,38.42
				C83.759,19.211,65.771,6.243,45.453,6.028H10.449C4.678,6.028,0,10.706,0,16.477s4.678,10.449,10.449,10.449h35.004
				c11.361,0.251,21.365,7.546,25.078,18.286l66.351,200.098l-5.224,12.016c-5.827,15.026-4.077,31.938,4.702,45.453
				c8.695,13.274,23.323,21.466,39.184,21.943h203.233c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449
				H175.543c-8.957-0.224-17.202-4.936-21.943-12.539c-4.688-7.51-5.651-16.762-2.612-25.078l4.18-9.404l219.951-22.988
				c24.16-2.661,44.034-20.233,49.633-43.886l25.078-105.012C450.96,81.893,450.36,78.492,448.261,76.037z M404.376,185.228
				c-3.392,15.226-16.319,26.457-31.869,27.69l-217.339,22.465L106.58,88.053l320.261,4.702L404.376,185.228z"
									/>
								</g>
							</svg>
							Próximamente
						</button>
					</div>
				</div>
			</section>
			<h2>Libros Relacionados</h2>
			<div class="wrapper">
				<Card v-for="(book, index) in related" :key="index" :book="book" />
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import { ref, computed, watch } from "vue"
import { useRoute } from "vue-router"
import firebase from "firebase/app"

import Header from "@/components/Header.vue"
import Card from "@/components/Card.vue"
import Footer from "@/components/Footer.vue"

export default {
	name: "book",
	components: {
		Header,
		Card,
		Footer,
	},
	setup() {
		const route = useRoute()
		const db = firebase.firestore()

		let book = ref({
			image: "",
			name: "",
			author: "",
			description: "",
			price: 0,
		})

		let formatedCategories = computed(() => {
			if (book.value.categories) {
				let text = ""
				for (let i = 0; i < book.value.categories.length; i++) {
					if (i != 0) {
						text = text + ", " + book.value.categories[i]
						continue
					}
					text = text + book.value.categories[i]
				}
				return text
			} else {
				return 0
			}
		})

		async function loadBookData() {
			let snapshot = await db.collection("books").doc(route.params.id).get()
			book.value = snapshot.data()

			loadRelatedBooks()
		}
		loadBookData()

		let related = ref([])

		async function loadRelatedBooks() {
			let snapshot = await db
				.collection("books")
				.where("categories", "array-contains", book.value.categories[0])
				.limit(5)
				.get()
			snapshot.forEach((doc) => {
				related.value.push({
					id: doc.id,
					...doc.data(),
				})
			})
		}

		watch(
			() => route.params.id,
			() => {
				related.value = []
				loadBookData()
			}
		)

		return {
			book,
			related,
			formatedCategories,
		}
	},
}
</script>

<style src="@/assets/styles/pages/book.scss"></style>
