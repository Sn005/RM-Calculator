<template lang='pug'>
div
  rm-form(
    :maxWeight.sync="maxWeight"
    :repsLength="repsLength"
  )
  v-divider(
    v-if="maxWeight"
  )
  rm-result(
    v-if="maxWeight"
    :maxWeight="maxWeight"
    :repsLength="repsLength"
  )
</template>
<script>
import RmForm from './partial/RmForm/Index.vue'
import RmResult from './partial/RmResult/Index.vue'
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
