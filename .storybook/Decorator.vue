<template lang="pug">
  v-app
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
