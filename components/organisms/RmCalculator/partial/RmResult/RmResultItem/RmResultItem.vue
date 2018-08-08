<template lang='pug'>
  div
    app-txt(size="l") {{ reps }}REPS: {{ result }}kg
</template>
<script>
import AppTxt from '@/components/atoms/AppTxt/Default.vue'
import utils from '@/components/organisms/RmCalculator/utils.js'
export default {
  name: 'RmResultItem',
  components: {
    AppTxt
  },
  props:{
    maxWeight:{
      type: Number,
      required: true
    },
    reps: {
      type: Number,
      required: true
    }
  },
  computed: {
    result() {
      const ratio = utils.calcRmRatio(this.reps)
      const weight = this.maxWeight / ratio
      // 小数点を含んでいないならば、この時点で返す
      if(!/\./.test(String(weight)) ) return weight
      return weight.toFixed(1)
    }
  }
}
</script>
<style scoped lang='scss'>
</style>
