import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import RmFormInputWeight from './Index.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('RmFormInputWeight.vue', () => {
  const options = {
    propsData: {
      weight: 100
    },
    localVue
  }
  it('mount', () => {
    const wrapper = shallowMount(RmFormInputWeight, options);

    expect(wrapper.isVueInstance()).toBe(true);
  })
  it('basic props', () => {
    const wrapper = shallowMount(RmFormInputWeight, options);

    expect(wrapper.vm.weight).toBe(100)
  })
  it('change のイベントハンドラーが設定されているか', () => {
    const dummyNum = 100
    const wrapper = shallowMount(RmFormInputWeight,options);
    wrapper.vm.handleInput(dummyNum)
    expect.assertions(2);
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0]).toEqual([dummyNum])
  });
})
