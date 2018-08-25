import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import AppTxt from './Presenter.vue'

describe('AppTxt.vue', () => {

  it('mount', () => {
    const wrapper = shallowMount(AppTxt)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  it('slotが正しく動作しているか', () => {
    const dummyTxt = "slotテストテキスト"
    const options = {
      slots: {
        default:dummyTxt
      }
    }
    const wrapper = shallowMount(AppTxt, options);
    expect(wrapper.text()).toBe(dummyTxt)
  })
  it('props->tagに応じたhtmlタグで描画されているか', () => {
    const wrapper = shallowMount(AppTxt)
    expect(wrapper.is('p')).toBeTruthy()

    wrapper.setProps({tag: 'span'})
    expect(wrapper.is('span')).toBeTruthy()

    wrapper.setProps({tag: 'div'})
    expect(wrapper.is('div')).toBeTruthy()
  })
  it('props->sizeに応じクラスが変更されているか', () => {
    const wrapper = shallowMount(AppTxt)
    expect(wrapper.is('.m')).toBeTruthy()

    wrapper.setProps({size: 's'})
    expect(wrapper.is('.s')).toBeTruthy()

    wrapper.setProps({size: 'l'})
    expect(wrapper.is('.l')).toBeTruthy()

    wrapper.setProps({size: 'xl'})
    expect(wrapper.is('.xl')).toBeTruthy()
  })
})
