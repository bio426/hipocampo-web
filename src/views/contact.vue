<template>
  <div id="contact">
    <Header />
    <div class="container">
      <h1>Contactanos</h1>
      <h2>Teléfonos</h2>
      <section>
        <span>992812764</span>
        <span>972544160</span>
        <span>994990264</span>
      </section>
      <hr>
      <h2>Correos</h2>
      <section>
        <span>Teófilo Gutiérrez Jiménez (teogu@yahoo.com)</span>
        <span>Alicia Santos Velásquez (alisanve@yahoo.com)</span>
      </section>
      <hr>
      <h2>Whatsapp</h2>
      <section>
        <span>+51 994990264</span>
      </section>
      <hr>
      <h2>Dirección</h2>
      <section class="address">
        <span>Jirón Agustín de Jauregui 748, La Victoria.</span>
        <iframe src="https://maps.google.com/maps?q=-12.068372, -77.008072&z=17&output=embed" frameborder="0" style="border:0"></iframe>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import {} from "vue"

import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "contact",
  components: {
    Header,
    Footer
  },
  setup(){

  }
}
</script>

<style src="@/assets/styles/pages/contact.scss">
</style>