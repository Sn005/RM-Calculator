import { mount } from '@vue/test-utils'
import RMFormSelectReps from './RMFormSelectReps.vue'

describe('RMFormSelectReps.vue', () => {
  it('渡した数値を元に適切なreps配列が生成されているか', () => {
    const props = {
      propsData: {
        repsLength: 1
      }
    }
    const wrapper = mount(RMFormSelectReps, props)
    expect(wrapper.vm.reps).toContain('1回')
  })
  // it('snapshotチェック', () => {
  //   const props = {
  //     propsData: {
  //       maxWeight: 100,
  //       rm: 10
  //     }
  //   }
  //   const wrapper = mount(RmResultItem, props)
  //   expect(wrapper.html()).toMatchSnapshot()
  // })
})
