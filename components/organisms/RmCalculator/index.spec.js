import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import RmCalculator from './Index.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('RmCalculator.vue', () => {
  const options = {
    localVue
  }
  it('mount', () => {
    const wrapper = shallowMount(RmCalculator, options);

    expect(wrapper.isVueInstance()).toBe(true);
  })
  it('maxWeightがtrueの場合、rm-resultコンポーネントが表示されるか', () => {
    const wrapper = shallowMount(RmCalculator, options);
    expect(wrapper.findAll('rmresult-stub').exists()).toBe(false)
    wrapper.setData({ maxWeight: 120 })
    expect(wrapper.findAll('rmresult-stub').exists()).toBe(true)
  });
})
