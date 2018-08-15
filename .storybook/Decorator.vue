<template lang="pug">
  v-app.decorator
    v-container(
      fluid
      grid-list-xl
    )
      v-layout(
        wrap
        align-center
      )
        v-flex(xs12)
          slot(name="story")
</template>
<script>
export default {
  name: 'Decorator'
}
</script>
<style lang="scss" scoped>
.decorator {
  p {
    margin: 0;
  }
}
</style>
