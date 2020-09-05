import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import {Item, State} from '@/store/interface.store';
import AxiosService from '@/service/axios.service';
import {AxiosResponse} from 'axios';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  state: {
    todoList: [],
  },
  mutations: {
    // TODO add
    addItem(state, item: Item) {
      const newTodoList: Item[] = state.todoList.concat();
      newTodoList.push(item);
      state.todoList = newTodoList;
    },
    // TODO change status
    changeItemStatus(state, {id, status}: {id: number, status: 'active'|'clear'}) {
      const newTodoList: Item[] = state.todoList.concat().map((item: Item) => {
        if (item.id === id) {
          const newItem: Item = item;
          newItem.status = status;
          return newItem;
        }
        return item;
      });
      state.todoList = newTodoList;
    },
    // TODO remove
    removeItem(state, id: number) {
      const newTodoList: Item[] = state.todoList.concat().filter((item: Item) => {
        return item.id !== id;
      });
      state.todoList = newTodoList;
    },
    setTodoList(state: State, todoList: Item[]) {
      state.todoList = todoList;
    },
  },
  actions: {
    async initData({ commit }) {
      // TODO http req
      const response: AxiosResponse<{todoList: Item[]}> = await AxiosService.instance.get('/data.json');

      commit('setTodoList', response.data.todoList);
    },
  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => {
      return state.todoList.filter((item: Item) => {
        return item.status === 'active';
      });
    },
    clearTodoList: (state) => {
      return state.todoList.filter((item: Item) => {
        return item.status === 'clear';
      });
    },
  },
};

export default new Vuex.Store(store);
