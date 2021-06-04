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
      <div class="wrapper">
        <ul class="items">
          <li>
            <img src="@/assets/libro.jpg">
            <div class="itemInfo">
              <h4>Titulo de libro</h4>
              <span>Autor de libro</span>
            </div>
            <span class="price">
              S/ 99.99
            </span>
            <button>X</button>
          </li>
        </ul>
        <div class="client">
          <h2>Completar Pedido</h2>
          <div class="info">

          </div>
          <div class="fields">

          </div>
          <button>Enviar</button>
        </div>
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
    Footer
  }
}
</script>

<style src="@/assets/styles/pages/cart.scss">
</style>