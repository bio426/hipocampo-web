<template>
	<div id="examples">
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
			<div class="bookExample" v-for="i in 4" :key="i">
				<img src="https://picsum.photos/200/300" alt="portada de ejemplo" />
				<h2>Titulo del Libro</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
					tempora repudiandae sapiente eum sequi quae accusantium dignissimos
					totam dolores voluptatem, dicta aut sunt qui sed deserunt, iusto eius
					ad amet?
				</p>
				<button>
					<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
						<path
							d="m509.796 326.874c-44.857-87.465-142.483-166.874-253.796-166.874-112.094 0-209.436 80.377-253.796 166.874-2.938 5.729-2.938 12.523 0 18.253 44.857 87.464 142.483 166.873 253.796 166.873 126.04 0 218.947-98.922 253.796-166.874 2.938-5.729 2.938-12.523 0-18.252zm-253.796 145.126c-90.776 0-166.974-60.307-212.956-136 45.473-74.855 121.428-136 212.956-136 91.137 0 167.232 60.735 212.956 136-46.194 76.038-122.697 136-212.956 136zm-249.697-360.828c7.39-8.209 20.037-8.871 28.246-1.48l44.544 40.107c8.208 7.392 8.871 20.037 1.48 28.246-7.391 8.21-20.038 8.87-28.246 1.48l-44.544-40.108c-8.208-7.39-8.871-20.036-1.48-28.245zm229.697-11.172v-80c0-11.045 8.954-20 20-20s20 8.955 20 20v80c0 11.045-8.954 20-20 20s-20-8.955-20-20zm-126.8-44.545c-4.493-10.091.045-21.913 10.136-26.406 10.092-4.493 21.913.045 26.406 10.136l30.587 68.7c4.493 10.09-.045 21.913-10.136 26.406-10.062 4.479-21.898-.014-26.406-10.136zm322.227 122.59c-7.391-8.208-6.729-20.854 1.48-28.246l44.544-40.107c8.208-7.391 20.855-6.729 28.246 1.48 7.391 8.208 6.729 20.854-1.48 28.245l-44.544 40.108c-8.211 7.392-20.856 6.727-28.246-1.48zm-95.757-70.16 30.587-68.7c4.493-10.091 16.315-14.629 26.406-10.136s14.629 16.315 10.136 26.406l-30.587 68.699c-4.513 10.137-16.36 14.609-26.406 10.137-10.09-4.493-14.628-16.315-10.136-26.406zm-79.67 129.865c-54.175 0-98.25 44.075-98.25 98.25s44.075 98.25 98.25 98.25 98.25-44.075 98.25-98.25-44.075-98.25-98.25-98.25zm0 156.5c-32.119 0-58.25-26.131-58.25-58.25s26.131-58.25 58.25-58.25 58.25 26.131 58.25 58.25-26.131 58.25-58.25 58.25z"
						/>
					</svg>
					Ver
				</button>
				<button>
					<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
						<g>
							<path
								d="m239.029 384.97a24 24 0 0 0 33.942 0l90.509-90.509a24 24 0 0 0 0-33.941 24 24 0 0 0 -33.941 0l-49.539 49.539v-262.059a24 24 0 0 0 -48 0v262.059l-49.539-49.539a24 24 0 0 0 -33.941 0 24 24 0 0 0 0 33.941z"
							/>
							<path
								d="m464 232a24 24 0 0 0 -24 24v184h-368v-184a24 24 0 0 0 -48 0v192a40 40 0 0 0 40 40h384a40 40 0 0 0 40-40v-192a24 24 0 0 0 -24-24z"
							/>
						</g>
					</svg>
					Descargar
				</button>
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
	name: "examples",
	components: {
		Header,
		Footer,
	},
	setup() {},
}
</script>

<style src="@/assets/styles/pages/examples.scss"></style>
