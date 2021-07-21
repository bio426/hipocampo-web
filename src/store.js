import {createStore} from "vuex"
import createPersistedState from "vuex-persistedstate"

const store = createStore({
  state: {
    bookSearchData: []
  },
  getters: {

  },
  mutations: {
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
