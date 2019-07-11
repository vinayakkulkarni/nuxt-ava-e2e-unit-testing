<template>
  <div id="todos">
    <ul>
      <li v-for="(todo, index) in todos" :key="index" class="todo-item">
        <input
          :id="`todo-${index}`"
          class="todo-item-input"
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
    <hr />
    <input id="show-undone" type="checkbox" @change="showUndoneTasks" />
    <label for="show-undone">Show only undone todos?</label>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
      todos: [],
      todoValue: '',
      isRequestInProgress: false,
    };
  },
  mounted() {
    this.todos = this.$store.state.list;
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
    showUndoneTasks(evt) {
      if (evt.target.checked) {
        this.todos = this.$store.getters.getUndoneTodos;
      } else {
        this.todos = this.$store.state.list;
      }
    },
  },
};
</script>
