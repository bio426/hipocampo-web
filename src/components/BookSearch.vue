<template>
	<div id="BookSearch">
		<input
			@input="suggest"
			v-model="input"
			type="text"
			placeholder="Busca un libro"
		/>
		<ul>
			<li @click="goToSuggestion(i)" v-for="i in suggestions" :key="i">
				{{ i.name }}
			</li>
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
import { ref, computed } from "vue"
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import firebase from "firebase/app"

export default {
	name: "BookSearch",
	setup() {
		const store = useStore()
		const router = useRouter()
		const db = firebase.firestore()

		// Obtener datos
		let bookSearchData = computed(() => store.state.bookSearchData)

		async function getBookSearchData() {
			let snapshot = await db.collection("books").get()
			snapshot.forEach((doc) => {
				let info = doc.data()
				store.commit("addData", {
					id: doc.id,
					name: info.name,
				})
			})
		}
		if (bookSearchData.value.length < 10) {
			getBookSearchData()
		}

		// let fruits = ["manzana", "pera", "mango", "platano", "fresa", "uva"]
		let input = ref(null)
		let suggestions = ref([])

		function suggest() {
			if (input.value.length < 2) {
				suggestions.value = []
				return 0
			}
			suggestions.value = bookSearchData.value.filter((book) =>
				book.name.toLowerCase().includes(input.value)
			)
		}

		function goToSuggestion(book) {
			router.replace(`/book/${book.id}`)
			input.value = null
			suggestions.value = []
		}

		return {
			input,
			suggestions,
			suggest,
			goToSuggestion,
		}
	},
}
</script>

<style src="@/assets/styles/BookSearch.scss"></style>
