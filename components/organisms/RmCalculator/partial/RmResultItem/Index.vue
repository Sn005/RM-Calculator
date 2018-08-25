<template lang='pug'>
  div
    app-txt(size="l") {{ reps }}REPS: {{ result }}kg
</template>
<script>
import AppTxt from '@/components/atoms/AppTxt/Index.vue'
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
      return utils.formatWeightByPlate(this.maxWeight / ratio)
    }
  }
}
</script>
<style scoped lang='scss'>
</style>
