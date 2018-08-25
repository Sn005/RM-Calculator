import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import RmFormLayout from './Index.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('RmFormLayout.vue', () => {
  it('slotの値が期待通り渡っているか', () => {
    const options = {
      slots: {
        left:'<div class="left">left</div>',
        center:'<span class="center">center</span>',
        right:'<p class="right">right</p>'
      },
      localVue
    }
    const wrapper = mount(RmFormLayout, options);
    expect.assertions(3);
    expect(wrapper.find('.left').text()).toBe('left')
    expect(wrapper.find('.center').text()).toBe('center')
    expect(wrapper.find('.right').text()).toBe('right')
  })
})
