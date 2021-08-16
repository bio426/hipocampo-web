<template>
	<footer id="Footer">
		<img src="@/assets/images/hipocampo-noBackground-white.png" />
		<div class="footerContainer">
			<ul class="categories">
				<li>
					<router-link :to="{path:'/catalog',query:{category:'Ensayo'}}">Ensayo</router-link>
				</li>
				<li>
					<router-link :to="{path:'/catalog',query:{category:'Narrativa'}}">Narrativa</router-link>
				</li>
				<li>
					<router-link :to="{path:'/catalog',query:{category:'Poesía'}}">Poesía</router-link>
				</li>
				<li>
					<router-link :to="{path:'/catalog',query:{category:'Filosofía'}}">Filosofía</router-link>
				</li>
				<li>
					<router-link :to="{path:'/catalog',query:{category:'Texto de investigación'}}">Texto de investigación</router-link>
				</li>
			</ul>
			<div class="info">
				<span>
					© 2021 Derechos Reservados <strong>Hipocampo Editores</strong>
				</span>
				<span>
					Made by <a href="https://www.github.com/bio426" target="_blank">Bildla</a>
				</span>
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
