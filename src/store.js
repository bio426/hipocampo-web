import {createStore} from "vuex"
import createPersistedState from "vuex-persistedstate"

const store = createStore({
  state: {
    cart: [],
    bookSearchData: []
  },
  getters: {

  },
  mutations: {
    addToCart(state,item){
      state.cart.push(item)
    },
    removeFromCart(state,index){
      // state.cart.splice(index,1)
    },
    addData(state,item){
      state.bookSearchData.push(item)
    }
  },
  actions: {},
  plugins: [
    createPersistedState({
      key: "hipocampoStore"
    })
  ]
})

export default store
