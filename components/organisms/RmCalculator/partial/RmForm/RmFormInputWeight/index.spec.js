import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import RmFormInputWeight from './Index.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('RmFormInputWeight.vue', () => {
  it('mount', () => {
    const wrapper = shallowMount(RmFormInputWeight, {
      propsData: {
        placeHolderText: '重量を入力してください'
      },
      localVue
    });

    expect(wrapper.isVueInstance()).toBe(true);
  })

})
