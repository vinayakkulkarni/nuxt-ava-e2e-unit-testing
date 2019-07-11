<template>
  <!--  Todo: make a better looking example page -->
  <section id="examples">
    <div class="container">
      <header class="examples-header">
        <h2 class="examples-title">Vuex examples</h2>
      </header>
      <main class="examples-content">
        <ul class="examples-list">
          <li
            v-for="(example, index) in examples"
            :key="index"
            class="examples-list-item"
          >
            <nuxt-link
              :to="example.href"
              class="examples-list-link"
              v-text="example.label"
            />
          </li>
        </ul>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      examples: [
        {
          label: 'Vuex - Todo',
          href: '/examples/vuex-todo',
        },
      ],
    };
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
.examples-header {
  margin-top: 2rem;
}
</style>
