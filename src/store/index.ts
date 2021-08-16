import { createStore } from 'vuex'
import axios from 'axios'
import getItem from '@/services/DataService'

export type State = {list_items: any[]}

export const store = createStore({
  state<State>() {
    return {
      list_items: <any>[],
      workspaces: <unknown>{},
      widgets: <any>[]
    }
  },
  actions: {
    fetchAllWidgets( {commit} ) {
      axios.get('/back/widget').then((response) => { commit('addWidget', response.data.content)})
      .catch((error) => {
        console.log(error)
        return error;
      })
    },
    fetchWorkspaces( {commit} ) {
      getItem('/workspace/all').then((response) => {
      commit('updateWorkspaces', response.data.content)
    })
    }
  },
  mutations: {
    addListItem(state, list_items) {
      state.list_items.push(list_items)
    },
    removeListItem(state, index) {
      state.list_items.splice(index, 1)
    },
    updateWorkspaces(state, workspaces) {
      state.workspaces = workspaces
    },
    addWidget(state, widgets) {
      state.widgets.push(widgets)
    }
  },
  getters: {
    all_list_items(state) {
      return state.list_items
    },
    all_workspaces(state) {
      return state.workspaces
    }
  }
})