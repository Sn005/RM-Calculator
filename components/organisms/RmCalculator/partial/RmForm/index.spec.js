import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import RmFormInputWeight from './Index.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('RmFormInputWeight.vue', () => {
  const options = {
    propsData: {
      repsLength: 10
    },
    localVue
  }
  it('mount', () => {
    const wrapper = shallowMount(RmFormInputWeight, options);

    expect(wrapper.isVueInstance()).toBe(true);
  })
  it('重量、repsを元に正しい計算結果を算出しているか', () => {
    const wrapper = shallowMount(RmFormInputWeight, options);
    wrapper.setData({ weight: 100, reps: 5 })
    expect(wrapper.vm.result).toBe(112.5)
    wrapper.setData({ weight: null, reps: 5 })
    expect(wrapper.vm.result).toBe(0)
    wrapper.setData({ weight: 100, reps: null })
    expect(wrapper.vm.result).toBe(0)
  })
  it('max重量値をwatchし、trueならば親にその値を返しているか', () => {
    const wrapper = shallowMount(RmFormInputWeight, options);
    wrapper.setData({ weight: null, reps: 5 })
    expect(wrapper.emitted()['update:maxWeight']).toBeFalsy()

    wrapper.setData({ weight: 100, reps: 5 })
    expect(wrapper.emitted()['update:maxWeight'][0]).toEqual([112.5])
  })
})
