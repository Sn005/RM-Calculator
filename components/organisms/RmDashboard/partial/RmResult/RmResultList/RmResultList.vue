<template lang='pug'>
  div
    rm-result-item(
      v-for="(rm , i) in rmList"
      :key="i"
      :maxWeight="maxWeight"
      :rm="rm"
    )
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
    rmList: {
      type: Array,
      required: true
    }
  }
 }
</script>
<style scoped lang='scss'>
</style>
