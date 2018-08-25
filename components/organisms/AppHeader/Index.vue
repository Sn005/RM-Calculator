<template lang='pug'>
  v-toolbar(
    dark
    color="teal lighten-3"
  )
    v-toolbar-title.white--text.title RM-Calculator
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>
<style lang="scss" scoped>
.title{
  width: 100%;
  margin: 0;
  text-align: center;
}
</style>
