import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import RMFormSelectReps from './Index.vue'

const localVue = createLocalVue()
localVue.use(Vuetify)


describe('RMFormSelectReps.vue', () => {
  const options = {
    propsData: {
      reps: 10,
      repsLength: 1
    },
    localVue
  }
  it('渡した数値を元に適切なreps配列が生成されているか', () =>
  {
    const wrapper = mount(RMFormSelectReps, options)
    expect(wrapper.vm.repsList).toContain(1)
  })
  it('handleSelectメソッドが正しく機能しているか', () =>
  {
    const dummyNum = 5
    const wrapper = mount(RMFormSelectReps, options)
    wrapper.vm.handleSelect(dummyNum)
    expect(wrapper.emitted()['update:reps']).toBeTruthy()
    expect(wrapper.emitted()['update:reps'][0]).toEqual([dummyNum])
  })
})
