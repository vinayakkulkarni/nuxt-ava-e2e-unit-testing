import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import test from 'ava';
import sinon from 'sinon';
import Todo from '@/components/Todo.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

const mutations = {
  add: sinon.spy(),
  toggle: sinon.spy(),
};

let state = {
  list: [],
};

function createStore() {
  return new Vuex.Store({
    state,
    mutations,
  });
}

test('component should mount', t => {
  const wrapper = shallowMount(Todo, { localVue, store: createStore() });
  t.is(wrapper.isVueInstance(), true);
});

test('it should call add mutation', t => {
  const wrapper = shallowMount(Todo, { localVue, store: createStore() });
  const input = wrapper.find('.todo-value');

  input.setValue('New todo item');
  input.trigger('keyup.enter');

  t.true(mutations.add.called);
});

test.todo('it should add new todo to list (state)');

test.todo('it should call toggle mutation');
