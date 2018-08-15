import { mount } from '@vue/test-utils'
import utils from './utils.js'

describe('utilsのテスト', () => {
  it('calcRmRatioのテスト', () => {
    expect(utils.calcRmRatio(1)).toBe(1)
    expect(utils.calcRmRatio(10)).toBe(1.25)
    expect(utils.calcRmRatio(8)).toBe(1.2)
    expect(utils.calcRmRatio(5)).toBe(1.125)
  })
  it('formatWeightByPlateのテスト', () => {
    expect(utils.formatWeightByPlate(100)).toBe(100)
    expect(utils.formatWeightByPlate(149)).toBe(147.5)
    expect(utils.formatWeightByPlate(98)).toBe(97.5)
  })
})
