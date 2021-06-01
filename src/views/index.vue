<template>
  <div id="index">
    <Header />
  </div>
</template>

<script>
import {ref} from "vue"

import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    Header,
    Footer
  }

}
</script>

<style src="@/assets/styles/pages/index.scss">
</style>