<template lang='pug'>
  div
    rm-result-layout(
      :items="repsLength"
    )
      rm-result-item(
        slot="item"
        slot-scope="{ i }"
        :maxWeight="maxWeight"
        :rm="i + 1"
      )
</template>
<script>
import RmResultItem from '../RmResultItem/RmResultItem.vue'
import RmResultLayout from '../RmResultLayout/RmResultLayout.vue'
export default {
  name: 'RmResultList',
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
<style scoped lang='scss'>
</style>
