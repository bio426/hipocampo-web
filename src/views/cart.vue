<template>
	<div id="cart">
		<Header />
		<div class="container">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quod
				ab tempore quo labore aspernatur non quos eos ad, asperiores, blanditiis
				voluptatum laborum modi vero maxime iusto, atque libero in.
			</p>
			Cart content
			<div class="cartWrapper">
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
						<tr>
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
				<div class="order"></div>
			</div>
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

<style src="@/assets/styles/pages/cart.scss"></style>
