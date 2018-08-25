import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import RmResultLayout from './Index.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('RmFormLayout.vue', () => {
  const options = {
    propsData: {
      items: 10
    },
    scopedSlots: {
      item: '<p slot-scope="{ i }">{{i}}番目</p>'
    },
    localVue
  }
  it('mount', () => {
    const wrapper = shallowMount(RmResultLayout, options);
    expect(wrapper.isVueInstance()).toBe(true);
  })
  it('slot-scopeに期待通り値が渡っているか', () => {
    const wrapper = mount(RmResultLayout, options);
    const first = wrapper.findAll('.xs6').at(0)
    expect(first.text()).toBe('0番目')
    const last = wrapper.findAll('.xs6').at(9)
    expect(last.text()).toBe('9番目')
  })
})
