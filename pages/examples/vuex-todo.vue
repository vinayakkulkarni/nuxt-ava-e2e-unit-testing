<template>
  <section id="vuex-example">
    <div class="container">
      <header class="vuex-example-header">
        <h2>This page is for vuex testing example</h2>
      </header>
      <div class="vuex-example-content">
        <Todo />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
    Todo: () => import('~/components/Todo.vue'),
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin: 0 auto;
}
.vuex-example-header {
  margin-top: 2rem;
}
.done {
  text-decoration: line-through;
}
</style>
