<template lang='pug'>
  v-container(
    grid-list-md
  )
    v-layout(
      row
      wrap
    )
      v-flex(
        xs12
        md5
      )
        slot(
          name="left"
        ) left-contents
      v-flex(
        xs12
        md2
      )
        slot(
          name="center"
        ) center-contents
      v-flex(
        xs1xs120
        md5
      )
        slot(
          name="right"
        ) right-contents
</template>
<script>
export default {
  name: 'RmFormLayout'
}
</script>
