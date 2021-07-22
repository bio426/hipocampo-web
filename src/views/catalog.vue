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
				<Loading msg="Cargando Libros..." style="grid-column: span 5" />
			</div>
			<nav class="pagination">
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
						<path
							id="XMLID_223_"
							d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213
	c-5.858-5.858-15.355-5.858-21.213,0.001l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607
	l150,149.996C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
						/>
					</svg>
				</button>
				<ul>
					<li class="active"><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
				</ul>
				<button>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
						<path
							id="XMLID_222_"
							d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
						/>
					</svg>
				</button>
			</nav>
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

		async function getBooks() {
			let snapshot = await db.collection("books").orderBy("name").limit(5).get()
			snapshot.forEach((doc) => {
				books.value.push({
					id: doc.id,
					...doc.data(),
				})
			})
			last = books.value[books.value.length - 1].name
			// console.log(last)
			loadMore = true
		}
		getBooks()

		// Infinite scroll
		let loadMore = false
		document.addEventListener("scroll", loadOnScroll)

		async function loadOnScroll() {
			if (!loadMore) {
				return 0
			}
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
				loadMore = false
				let snapshot = await db
					.collection("books")
					.orderBy("name")
					.startAfter(last)
					.limit(5)
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
		}

		return {
			books,
		}
	},
}
</script>

<style src="@/assets/styles/pages/catalog.scss"></style>
