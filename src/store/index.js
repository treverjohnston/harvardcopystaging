import Vue from 'vue'
import Vuex from 'vuex'
import VueAnime from 'vue-animejs';

import tabs from './tabs'
import auth from './auth'
import items from './items'
import state from './state'

Vue.use(Vuex)
Vue.use(VueAnime)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      tabs,
      auth,
      items,
      state
    },



    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
