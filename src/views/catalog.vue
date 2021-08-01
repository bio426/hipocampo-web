<template>
	<div id="catalog">
		<Header />
		<section class="indications">
			<div class="container">
				<p>
					Usa los filtros para buscar los libros que desees. /
					<strong>Mostrando 100 de 250 resultados</strong>
				</p>
			</div>
		</section>
		<div class="container">
			<div class="filters">
				<label>
					Precio
					<input type="range" />
				</label>
				<label>
					Categoria
					<select name="category">
						<option value="1">Category 1</option>
						<option value="2">Category 2</option>
						<option value="3">Category 3</option>
					</select>
				</label>
				<label>
					Año de publicacion xd
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
				<Loading msg="Cargando Libros...  " class="loaderStyle" v-if="!allBooksLoaded" />
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import { ref, onMounted } from "vue"
import firebase from "firebase/app"

import Header from "@/components/Header.vue"
import Loading from "@/components/Loading.vue"
import Card from "@/components/Card.vue"
import Footer from "@/components/Footer.vue"

export default {
	name: "catalog",
	components: {
		Header,
		Loading,
		Card,
		Footer,
	},
	setup() {
		const db = firebase.firestore()

		let books = ref([])
		let last = null
		let allBooksLoaded = ref(false)

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
		getBooks()

		// Infinite scroll
		let loadMore = false
		document.addEventListener("scroll", loadOnScroll)

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
				if (snapshot.empty){
					allBooksLoaded.value = true
				}
				snapshot.forEach((doc) => {
					books.value.push({
						id: doc.id,
						...doc.data(),
					})
				})
				last = books.value[books.value.length - 1].name
				setTimeout(()=>{
					loadMore = true
				},2000)
			}
		}

		return {
			books,
			allBooksLoaded
		}
	},
}
</script>

<style src="@/assets/styles/pages/catalog.scss"></style>
