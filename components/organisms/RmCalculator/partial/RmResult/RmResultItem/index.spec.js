import { mount } from '@vue/test-utils'
import RmResultItem from './RmResultItem.vue'

describe('RmResultItem.vue', () => {
  it('RM係数のテスト', () => {
    const props = {
      propsData: {
        maxWeight: 100,
        reps: 8
      }
    }
    const wrapper = mount(RmResultItem, props)
    console.log(wrapper.reps.ratio)
    expect(wrapper.reps.ratio).toBe(1.2)
  })
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
  it('snapshotチェック', () => {
    const props = {
      propsData: {
        maxWeight: 100,
        reps: 10
      }
    }
    const wrapper = mount(RmResultItem, props)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
