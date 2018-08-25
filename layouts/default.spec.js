import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Default from './default.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('Default.vue', () => {
  const options = {
    localVue
  }
  it('mount', () => {
    const wrapper = shallowMount(Default, options);

    expect(wrapper.isVueInstance()).toBe(true);
  })
})
