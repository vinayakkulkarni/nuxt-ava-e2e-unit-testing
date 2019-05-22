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
