<template>
	<div id="cart">
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
			<div class="cartWrapper">
				<div class="tableContainer">
					<table>
						<thead>
							<tr>
								<th>Image</th>
								<th>Title</th>
								<th>ISBN</th>
								<th>Price</th>
								<th>Remove</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="i in 5" :key="i">
								<td>
									<img src="https://picsum.photos/200/300" />
								</td>
								<td>Titulo del Libro</td>
								<td>978-3-16-148410-0</td>
								<td>S/ 99.99</td>
								<td>
									<button>x</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="order">
					<h2>Detalles del pedido</h2>
					<div class="details">
						<section>
							<h4>Subtotal</h4>
							<span>S/ 99.99</span>
						</section>
						<section>
							<h4>Subtotal</h4>
							<span>S/ 99.99</span>
						</section>
						<section>
							<h4>Subtotal</h4>
							<span>S/ 99.99</span>
						</section>
					</div>
					<h2>Informacion del cliente</h2>
					<div class="client">
						<label>
							Nombre:
							<input type="text" />
						</label>
						<label>
							Telefono:
							<input type="text" />
						</label>
						<label>
							Correo:
							<input type="text" />
						</label>
						<label>
							Dirección:
							<input type="text" />
						</label>
						<button>Enviar orden</button>
					</div>
				</div>
			</div>
			<h2>Libros Recomendados</h2>
			<div class="wrapper">
				<Card
					v-for="(recomendado, index) in recomendados"
					:key="index"
					:book="recomendado"
				/>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import { ref } from "vue"
import firebase from "firebase/app"

import Header from "@/components/Header.vue"
import Card from "@/components/Card.vue"
import Footer from "@/components/Footer.vue"

export default {
	name: "cart",
	components: {
		Header,
		Card,
		Footer,
	},
	setup() {
		const db = firebase.firestore()

		let recomendados = ref([])

		async function getBooks() {
			let snapshot = await db.collection("books").limit(5).get()
			snapshot.forEach((doc) => {
				recomendados.value.push({
					id: doc.id,
					...doc.data(),
				})
			})
		}
		getBooks()

		return {
			recomendados,
		}
	},
}
</script>

<style src="@/assets/styles/pages/cart.scss"></style>
