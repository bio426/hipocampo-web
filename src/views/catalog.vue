<template>
	<div id="catalog">
		<Header />
		<section class="indications">
			<div class="container">
				<p>
					Mostrando catalogo de libros disponibles. /
					<strong>Mostrando {{ books.length }} de 58 resultados</strong>
					<i>{{ route.query }}</i>
				</p>
			</div>
		</section>
		<div class="container">
			<div class="filters" v-if="false">
				<label>
					Precio
					<input type="range" />
				</label>
				<label>
					Ordenar por campo
					<select name="category">
						<option value="1">Category 1</option>
						<option value="2">Category 2</option>
						<option value="3">Category 3</option>
					</select>
				</label>
				<label>
					Dirección
					<select name="year">
						<option value="1">2001</option>
						<option value="2">2002</option>
						<option value="3">2003</option>
					</select>
				</label>
				<label>
					Orden
					<select name="order">
						<option value="1">Ascendant</option>
						<option value="2">Descendant</option>
					</select>
				</label>
				<button>Aplicar</button>
			</div>
			<div class="wrapper">
				<Card
					class="noanim"
					v-for="(book, index) in books"
					:key="index"
					:book="book"
					noHover
				/>
				<div class="loader" v-if="!allBooksLoaded">
					Cargando Información
					<div class="lds-dual-ring"></div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import { ref } from "vue"
import { useRoute } from "vue-router"
import firebase from "firebase/app"

import Header from "@/components/Header.vue"
import Card from "@/components/Card.vue"
import Footer from "@/components/Footer.vue"

export default {
	name: "catalog",
	components: {
		Header,
		Card,
		Footer,
	},
	setup() {
		const db = firebase.firestore()
		const route = useRoute()

		let books = ref([])

		async function getBooks() {
			let snapshot = await db
				.collection("books")
				.orderBy("name")
				.limit(10)
				.get()
			snapshot.forEach((doc) => {
				books.value.push({
					id: doc.id,
					...doc.data(),
				})
			})
			last = books.value[books.value.length - 1].name
			loadMore = true
		}

		async function getCategoryBooks() {
			let snapshot = await db
				.collection("books")
				.where("categories", "array-contains", route.query.category)
				.get()
			snapshot.forEach((doc) => {
				books.value.push({
					id: doc.id,
					...doc.data(),
				})
			})
			allBooksLoaded.value = true
		}

		if (route.query.category) {
			getCategoryBooks()
		} else {
			getBooks()
			document.addEventListener("scroll", loadOnScroll)
		}

		// Infinite scroll
		let loadMore = false
		let last = null
		let allBooksLoaded = ref(false)

		async function loadOnScroll() {
			if (!loadMore && !allBooksLoaded.value) {
				return 0
			}
			if (
				window.innerHeight + window.scrollY >=
				document.body.offsetHeight - 300
			) {
				loadMore = false
				let snapshot = await db
					.collection("books")
					.orderBy("name")
					.startAfter(last)
					.limit(5)
					.get()
				if (snapshot.empty) {
					allBooksLoaded.value = true
				}
				snapshot.forEach((doc) => {
					books.value.push({
						id: doc.id,
						...doc.data(),
					})
				})
				last = books.value[books.value.length - 1].name
				setTimeout(() => {
					loadMore = true
				}, 2000)
			}
		}

		return {
			books,
			allBooksLoaded,
			route,
		}
	},
}
</script>

<style src="@/assets/styles/pages/catalog.scss"></style>
