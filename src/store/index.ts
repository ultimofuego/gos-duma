import { createStore } from 'vuex'
import axios from 'axios'
import getItem from '@/services/DataService'
import ResponseData from '@/types/ResponseData'

export type State = {
  list_items: any[],
  template: any[],
  widgets: any[],
  workspaces: any[]
}

export const store = createStore({
  state<State>() {
    return {
      list_items: <any>[],
      workspaces: <any>[],
      widgets: <any>[],
      template: <any>[],

    }
  },
  actions: {
    fetchAllWidgets( {commit} ) {
      axios.get('/back/widget').then((response) => { commit('addWidget', response.data.content)} )
      .catch((error) => {
        console.log(error)
        return error;
      })
    },
    fetchWorkspaces( {commit} ) {
        getItem('/workspace/all').then((response: ResponseData) => {
        commit('updateWorkspaces', response.data.content)
        return response.data.content
      })
      .catch(error => {
        console.log(error)
        return error
      })
    },
    fetchTemplates( {commit} ) {
      getItem('template/all').then((response: ResponseData) => {
        commit('updateTemplates', response.data.content)
        return response.data.content
      })
      .catch(error => {
        console.log(error)
        return error
      })
    },
    pushToDB( {commit}, item ) {
      axios.post('/back/workspace', item).then((response) => {
        commit('addWorkspace', response.data)} )
    },
    removeWorkspace( {commit}, obj ) {
      axios.delete(`/back/workspace/${obj.id}`).then((response) => {
        console.log(response)
        commit('removeWorkspace', obj.idx)
      })
    } 
  },
  mutations: {
    addListItem(state, list_items) {
      state.list_items.push(list_items)
    },
    addWorkspace(state, workspaces) {
      state.workspaces.push(workspaces)
    },
    addWidget(state, widgets) {
      state.widgets.push(widgets)
    },
    removeListItem(state, index) {
      state.list_items.splice(index, 1)
    },
    removeWorkspace(state, index) {
      state.workspaces.splice(index, 1)
    },
    updateWorkspaces(state, workspaces) {
      state.workspaces = workspaces
    },
    updateTemplates(state, template) {
      state.template = template
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