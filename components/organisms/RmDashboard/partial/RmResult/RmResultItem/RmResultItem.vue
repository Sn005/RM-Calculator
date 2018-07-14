<template lang='pug'>
  div
    app-txt(size="l") {{ rep }}RM: {{ result }}kg
</template>
<script>
import AppTxt from '@/components/atoms/AppTxt/Default.vue'
export default {
  name: 'RmResultItem',
  components: {
    AppTxt
  },
  props:{
    maxHeight:{
      type: Number,
      required: true
    },
    rep: {
      type: Number,
      required: true,
      validator (val) {
        return val > 1 && val < 10
      }
    },
    ratio: {
      type: Number,
      required: true,
      validator (val) {
        return val > 0 && val < 1
      }
    }
  },
  computed: {
    result() {
      const height = this.maxHeight / this.ratio
      // 小数点を含んでいないならば、この時点で返す
      if(!/\./.test(String(height)) ) return height
      return height.toFixed(1)
    }
  }
}
</script>
<style scoped lang='scss'>
</style>
