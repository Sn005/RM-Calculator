<template lang='pug'>
div
  rm-form(
    v-model="maxWeight"
    :repsLength="repsLength"
  )
  | {{ maxWeight }}
</template>
<script>
import RmForm from './partial/RmForm/Index.vue'
import CONSTANT from './constant.js'
export default {
  name: 'RmCalculator',
  components: {
    RmForm
  },
  data() {
    return {
      maxWeight: 0,
      repsLength: CONSTANT.REPS_LENGTH
    }
  }
}
</script>
<style scoped lang='scss'>
</style>
