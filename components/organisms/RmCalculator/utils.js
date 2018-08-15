import CONSTANT from './constant.js'

export default {
  /**
   *引数を元にrm比率を計算する
   *
   * @param {Number} reps レップ回数
   * @returns {Number} rm比率
   */
  calcRmRatio(reps) {
    if(reps === 1) return 1
    return 1 + (reps / 40)
  },
  /**
   *引数で受け取った重量をプレートの重さに合わせ整形する
   *
   * @param {Number} weight 重量
   * @returns {Number} プレートに合わせた重量
   */
  formatWeightByPlate(weight) {
    return Math.floor( weight　/ CONSTANT.PLATE_BASE_WEIGHT) * CONSTANT.PLATE_BASE_WEIGHT
  }
}
