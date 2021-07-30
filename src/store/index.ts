import { createStore } from 'vuex'

export type State = {list_items: any[]}

export const store = createStore({
  state<State>() {
    return {
      list_items: <any>[],
      workspaces: <unknown>{}
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