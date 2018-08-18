<template lang='pug'>
div
  rm-form(
    :maxWeight.sync="maxWeight"
    :repsLength="repsLength"
  )
  rm-result(
    v-if="maxWeight"
    :maxWeight="maxWeight"
    :repsLength="repsLength"
  )
  | {{ maxWeight }}
</template>
<script>
import RmForm from './partial/RmForm/Index.vue'
import RmResult from './partial/RmResult/RmResultList/RmResultList.vue'
import CONSTANT from './constant.js'
export default {
  name: 'RmCalculator',
  components: {
    RmForm,
    RmResult
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
