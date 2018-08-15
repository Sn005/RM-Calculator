import { mount } from '@vue/test-utils'
import RmResultItem from './RmResultItem.vue'

describe('RmResultItem.vue', () => {
  it('RM計算結果のテスト', () => {
    const props = {
      propsData: {
        maxWeight: 100,
        reps: 10
      }
    }
    const wrapper = mount(RmResultItem, props)
    expect(wrapper.vm.result).toBe(80)
  })
})
