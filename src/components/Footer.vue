<template>
	<footer id="Footer">
		<img src="@/assets/images/hipocampo.jpeg" />
		<div class="footerContainer">
			<ul class="categories">
				<li v-for="i in 7" :key="i">
					<a href="#">Category</a>
				</li>
			</ul>
			<div class="info">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
					culpa nostrum pariatur inventore, aut sint, unde quod dolorum possimus
					eligendi hic repellat iste! Corporis architecto voluptatem odit autem
					veritatis cum?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
					culpa nostrum pariatur inventore, aut sint, unde quod dolorum possimus
					eligendi hic repellat iste! Corporis architecto voluptatem odit autem
					veritatis cum?
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
					culpa nostrum pariatur inventore, aut sint, unde quod dolorum possimus
					eligendi hic repellat iste! Corporis architecto voluptatem odit autem
					veritatis cum?
				</p>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Header",
}
</script>

<style src="@/assets/styles/Footer.scss"></style>
