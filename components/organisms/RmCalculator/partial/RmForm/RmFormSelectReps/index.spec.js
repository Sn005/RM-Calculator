import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import RMFormSelectReps from './RMFormSelectReps.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)


describe('RMFormSelectReps.vue', () => {
  it('渡した数値を元に適切なreps配列が生成されているか', () =>
  {
    // const props = {
    //   propsData: {
    //     repsLength: 1
    //   }
    // }
    const propsData = {
      repsLength: 1
    }
    const wrapper = mount(RMFormSelectReps, {propsData, localVue})
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
