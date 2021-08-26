import { createStore } from "vuex";

export default createStore({
  state: {
    activeSkill: `1`,
  },
  mutations: {
    setActiveSkill(state, activeSkill) {
      state.activeSkill = activeSkill;
    },
  },
  actions: {},
  modules: {},
});
