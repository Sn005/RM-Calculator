<template lang='pug'>
  div
    rm-result-item(
      v-for="i in rmListLength"
      :key="i"
      :maxWeight="maxWeight"
      :rm="i"
    )
    p {{ maxWeight }}
</template>
<script>
import RmResultItem from '@/components/organisms/RmDashboard/partial/RmResult/RmResultItem/RmResultItem.vue'
export default {
  name: 'RmResultList',
  components: {RmResultItem},
  props: {
    maxWeight:{
      type: Number,
      required: true
    },
    rmListLength: {
      type: Number,
      required: true
    }
  }
 }
</script>
<style scoped lang='scss'>
</style>
