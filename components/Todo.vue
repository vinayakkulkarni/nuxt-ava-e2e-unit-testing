<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      todoValue: '',
    };
  },
  computed: {
    todos() {
      return this.$store.state.list;
    },
  },
  methods: {
    ...mapMutations({
      toggle: 'toggle',
    }),
    addTodo() {
      this.$store.commit('add', this.todoValue);
      this.todoValue = '';
    },
  },
};
</script>

<template>
  <div id="todos">
    <ul>
      <li v-for="(todo, index) in todos" :key="index" class="todo-item">
        <input
          :id="`todo-${index}`"
          type="checkbox"
          :checked="todo.done"
          @change="toggle(todo)"
        />
        <span :class="{ done: todo.done }">
          <label :for="`todo-${index}`">{{ todo.text }}</label>
        </span>
      </li>
    </ul>
    <input
      v-model="todoValue"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo"
      class="todo-value"
    />
  </div>
</template>
