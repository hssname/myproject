import Vue from 'vue'
import Vuex from 'vuex'
import configVuex from './module'

Vue.use(Vuex);

const handleStore = store => {
  if (sessionStorage.store) store.replaceState(JSON.parse(sessionStorage.store))  // 初始化store
  store.subscribe((mutation, state) => {
      sessionStorage.setItem("store",  JSON.stringify(state))
  })
}

export default new Vuex.Store({
  modules: configVuex,
  plugins: [handleStore]
})
