<template>
  <div id="index">
    <Header />
    <div class="container">
      <img src="https://picsum.photos/1140/270">
      <h4>Novedades</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam architecto itaque in. Illo, corporis explicabo aspernatur aliquam atque nulla blanditiis beatae odio velit tenetur, esse porro dicta sapiente deserunt quidem.</p>
      <div class="wrapper">
        <Book v-for="i in 10" :key="i" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import {ref} from "vue"

import Header from "@/components/Header.vue"
import Book from "@/components/Book.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Header,
    Book,
    Footer
  }

}
</script>

<style src="@/assets/styles/pages/index.scss">
</style>