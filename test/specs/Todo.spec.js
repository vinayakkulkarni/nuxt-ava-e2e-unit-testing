import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import test from 'ava';
import sinon from 'sinon';
import Todo from '@/components/Todo.vue';
import {
  state as storeState,
  mutations as storeMutations,
  getters as storeGetters,
} from '@/store';

const localVue = createLocalVue();

localVue.use(Vuex);

let store, state, mutations, actions;

function createStore(state, mutations, actions) {
  return new Vuex.Store({
    state,
    mutations,
    actions,
  });
}

/**
 * Mock the store before each test.
 */
test.beforeEach(t => {
  state = storeState;

  mutations = {
    add: sinon.spy(),
    toggle: sinon.spy(),
  };

  actions = {
    getRandomTodo: sinon.spy(),
  };

  store = createStore(state, mutations, actions);
});

/**
 * Sample test for component.
 */
test('component should mount', t => {
  const wrapper = shallowMount(Todo, { localVue, store });
  t.is(wrapper.isVueInstance(), true);
});

/**
 * Sample test for mutations.
 */
test('it should call add mutation', t => {
  const wrapper = shallowMount(Todo, { localVue, store });
  const input = wrapper.find('.todo-value');

  input.setValue('New todo item');
  input.trigger('keyup.enter');

  t.true(mutations.add.called);
});

/**
 * Sample test for actions.
 */
test('it should call getRandomTodo action', t => {
  const wrapper = shallowMount(Todo, { localVue, store });
  const btn = wrapper.find('.todo-get-random');

  btn.trigger('click');

  t.true(actions.getRandomTodo.called);
});

/**
 * Sample test for the state.
 */
test('it should add new todo to list (state)', t => {
  const { add } = storeMutations;

  add(store.state, 'A new item');

  t.assert(store.state.list.length > 0);
});

/**
 * Sample test for getters
 */
test('it should return only undone todos from state', t => {
  const { getUndoneTodos } = storeGetters;

  state.list = [
    {
      done: false,
      text: 'A new item',
    },
    {
      done: false,
      text: 'A second item',
    },
    {
      done: true,
      text: 'Another item',
    },
  ];

  t.falsy(getUndoneTodos(state).some(todo => todo.done));
});
