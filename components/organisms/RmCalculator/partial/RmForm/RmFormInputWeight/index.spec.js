import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import RmFormInputWeight from './Index.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('RmFormInputWeight.vue', () => {
  it('mount', () => {
    const wrapper = shallowMount(RmFormInputWeight, {
      propsData: {
        weight: 100
      },
      localVue
    });

    expect(wrapper.isVueInstance()).toBe(true);
  })
  // it('input のイベントハンドラーが設定されているか', () => {
  //   const wrapper = mount(RmFormInputWeight, {
  //     propsData: {
  //       weight: 100
  //     },
  //     localVue
  //   });
  //   console.log(wrapper)
  //   const input = wrapper.find('input');
  //   input.trigger('input');

  //   expect(wrapper.emitted('input')).toHaveLength(1);
  // });
})
