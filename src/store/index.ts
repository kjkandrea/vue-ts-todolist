import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {Item, State} from '@/store/interface.store';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [
      {id: 0, title: 'test', status: 'active'},
      {id: 1, title: 'test1', status: 'active'},
      {id: 2, title: 'test2', status: 'clear'},
    ]
  },
  mutations: {
    // TODO add
    addItem(state, item: Item) {
      let newTodoList: Item[] = state.todoList.concat()
      newTodoList.push(item)
      state.todoList = newTodoList
    },
    // TODO change status
    changeItemStatus(state, {id, status}: {id: number, status: 'active'|'clear'}) {
      let newTodoList: Item[] = state.todoList.concat().map((item: Item) => {
        if (item.id === id) {
          let newItem: Item = item
          newItem.status = status
          return newItem
        }
        return item
      })
      state.todoList = newTodoList
    },
    // TODO remove
    removeItem(state, id: number) {
      const newTodoList: Item[] = state.todoList.concat().filter((item: Item) => {
        return item.id !== id
      })
      state.todoList = newTodoList
    }
  },
  actions: {
  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => {
      return state.todoList.filter((item: Item) => {
        return item.status === 'active'
      })
    },
    clearTodoList: (state) => {
      return state.todoList.filter((item: Item) => {
        return item.status === 'clear'
      })
    }
  }
};

export default new Vuex.Store(store)
