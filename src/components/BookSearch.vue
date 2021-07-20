<template>
	<div id="BookSearch">
		<input
			@input="suggest"
			v-model="input"
			type="text"
			placeholder="Busca un libro"
		/>
		<ul>
			<li @click="goToSuggestion(i)" v-for="i in suggestions" :key="i">{{i}}</li>
		</ul>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
			<path
				d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
			/>
		</svg>
	</div>
</template>

<script>
import { ref } from "vue"

export default {
	name: "BookSearch",
	setup() {
		let fruits = ["manzana", "pera", "mango", "platano", "fresa", "uva"]
		let input = ref(null)
    let suggestions = ref([])

		function suggest() {
      if (input.value.length < 2){
        suggestions.value = []
        return 0
      }
			suggestions.value = fruits.filter((fruit) =>
				fruit.toLowerCase().includes(input.value)
			)
		}

    function goToSuggestion(book){
      console.log(book)
    }

		return {
			input,
      suggestions,
			suggest,
      goToSuggestion
		}
	},
}
</script>

<style lang="scss">
#BookSearch {
  position: relative;
	display: flex;
	padding: 0.5rem;
	background: #ffeae9e9;
	border-radius: 1rem;

	input {
		background: none;
		border: none;
		outline: none;
	}

  ul{
    list-style: none;
    position: absolute;
    top: 2rem;
    width: 95%;
    background: gray;
    color: #fff;
  }

	svg {
		width: 1rem;
		height: auto;
	}
}
</style>
