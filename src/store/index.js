import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {is_do: false, title: '1'},
      {is_do: true, title: '2'},
      {is_do: false, title: '3'}
    ]
  },
  mutations: {
    [types.ADD_TASK] (state, payload) {
      state.items.push(payload.data);
    },
    [types.DONE_TASK] (state, payload) {
      const index = state.items.indexOf(payload.data);
      const item = state.items[index];
      item.is_do = !item.is_do;
    },
    [ types.REMOVE_TASK ] (state) {
      state.items = state.items.filter(item => !item.is_do);
    },
  },
  actions: {
    [types.ADD_TASK] ({ commit }, title) {
      const newItem = {
        title: title,
        is_do: false
      }
      commit( types.ADD_TASK, {
        data: newItem
      })
    },
    [types.DONE_TASK] ({ commit }, item) {
      commit( types.DONE_TASK, {
        data: item
      })
    },
    [ types.REMOVE_TASK ] ({ commit }) {
      commit( types.REMOVE_TASK )
    },
  }
});
