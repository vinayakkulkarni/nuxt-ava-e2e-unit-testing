export const state = () => ({
  list: [],
});

export const mutations = {
  add(state, text) {
    state.list.push({
      text: text,
      done: false,
    });
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  },
};

export const getters = {
  getUndoneTodos: state => {
    return state.list.filter(todo => !todo.done);
  },
};

export const actions = {
  async getRandomTodo({ commit }) {
    const randomNumberUnderTwoHundred = Math.floor(Math.random() * 200);
    const { data } = await this.$axios.get(
      `https://jsonplaceholder.typicode.com/todos/${randomNumberUnderTwoHundred}`,
    );
    commit('add', data.title);
  },
};
