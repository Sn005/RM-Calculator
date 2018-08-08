export default {
  calcRmRatio(value) {
    if(value === 1) return 1
    return 1 + (value / 40)
  }
}
