<template lang='pug'>
v-container(
  grid-list-md
  text-xs-center
)
  v-layout(
    row
    wrap
  )
    v-flex(
      v-for="item, i in items"
      :key="i"
      xs6
    )
      slot(
        name="item"
        :i="i"
      ) test
</template>
<script>
export default {
  name: 'RmResultLayout',
	props: {
  	items: Number
  }
 }
</script>
<style scoped lang='scss'>
</style>
