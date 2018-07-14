<template lang='pug'>
  div
    app-txt(size="l") {{ rm }}RM: {{ result }}kg
</template>
<script>
import AppTxt from '@/components/atoms/AppTxt/Default.vue'
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
    rm: {
      type: Number,
      required: true
    }
  },
  computed: {
    ratio() {
      if(this.rm === 1) return 1
      return 1 + (this.rm / 40)
    },
    result() {
      const weight = this.maxWeight / this.ratio
      // 小数点を含んでいないならば、この時点で返す
      if(!/\./.test(String(weight)) ) return weight
      return weight.toFixed(1)
    }
  }
}
</script>
<style scoped lang='scss'>
</style>
