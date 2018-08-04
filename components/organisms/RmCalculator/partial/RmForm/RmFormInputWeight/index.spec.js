import { shallowMount } from '@vue/test-utils';

import RmFormInputWeight from './Index.vue'


describe('RmFormInputWeight.vue', () => {
  it('mount', () => {
    const wrapper = shallowMount(RmFormInputWeight, {
      propsData: {
        placeHolderText: '重量を入力してください'
      },
    });

    expect(wrapper.isVueInstance()).toBe(true);
  })

})
