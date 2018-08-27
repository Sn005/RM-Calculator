import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import RmResult from './Index.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('RmResult.vue', () => {
  const options = {
    propsData: {
      maxWeight: 100,
      repsLength: 10
    },
    localVue
  }
  it('mount', () => {
    const wrapper = shallowMount(RmResult, options);

    expect(wrapper.isVueInstance()).toBe(true);
  })
  it('basic props', () => {
    const wrapper = mount(RmResult, options);

    const first = wrapper.findAll('.xs6').at(0)
    expect(first.text()).toBe('1REPS: 100kg')
    const last = wrapper.findAll('.xs6').at(9)
    expect(last.text()).toBe('10REPS: 80kg')
  })
})
