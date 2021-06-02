<template>
  <div id="index">
    <Header />
    <div class="container">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio autem quas modi? Quisquam voluptatem ad autem corrupti vero aspernatur, dolorum quae illo architecto voluptas deserunt provident ullam necessitatibus. A, quis? This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” (which was temporarily done by the main-size keyword until deprecated). The content keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren max-content, min-content, and fit-content do.</p>
      <h3>Libros Populares</h3>
      <div class="wrapper">
        <Card v-for="i in 5" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue"

import Header from "@/components/Header.vue"
import Card from "@/components/Card.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "index",
  components: {
    Header,
    Card,
    Footer,
  }

}
</script>

<style src="@/assets/styles/pages/index.scss">
</style>