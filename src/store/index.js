import { createStore } from 'vuex';

export default createStore({
  state: {
    difficulty: 'mid',
    numSquares: 36, // ? 36 by default to mid difficulty
  },
  getters: {
    difficulty: (state) => state.difficulty,
    numSquares: (state) => state.numSquares,
  },
  mutations: {
    setDifficulty(state, type) {
      state.difficulty = type;
    },
  },
  actions: {
  },
  modules: {
  },
});
