<template lang='pug'>
  div
    rm-result-layout(
      :items="repsLength"
    )
      rm-result-item(
        slot="item"
        slot-scope="{ i }"
        :maxWeight="maxWeight"
        :reps="i + 1"
      )
</template>
<script>
import RmResultItem from '@organisms/RmCalculator/partial/RmResultItem/Index.vue'
import RmResultLayout from '@organisms/RmCalculator/partial/RmResultLayout/Index.vue'
export default {
  name: 'RmResult',
  components: {
    RmResultItem,
    RmResultLayout
  },
  props: {
    maxWeight:{
      type: Number,
      required: true
    },
    repsLength: {
      type: Number,
      required: true
    }
  }
 }
</script>
