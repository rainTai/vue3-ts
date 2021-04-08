import { createStore } from "vuex";

const store = createStore({
  state: {
    name: "zhuda",
  },
  mutations: {
    setStateName(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    setStateName(context,name){
      context.commit('setStateName',name)
    }
  },
  modules: {},
});

export default store;
