<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      todoValue: '',
      isRequestInProgress: false,
    };
  },
  computed: {
    todos() {
      return this.$store.state.list;
    },
  },
  methods: {
    ...mapActions(['getRandomTodo']),
    ...mapMutations({
      toggle: 'toggle',
    }),
    addTodo() {
      this.$store.commit('add', this.todoValue);
      this.todoValue = '';
    },
    async getRandomTodoItem() {
      this.isRequestInProgress = true;
      await this.getRandomTodo();
      this.isRequestInProgress = false;
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
      class="todo-value"
      placeholder="What needs to be done?"
      @keyup.enter="addTodo"
    />
    <button
      type="button"
      :disabled="isRequestInProgress"
      class="todo-get-random"
      @click="getRandomTodoItem"
      v-text="'Get random todo'"
    />
  </div>
</template>
