<template lang='pug'>
  v-text-field(
    :label="placeHolderText"
    :rules="rules"
    required
  )
</template>
<script>
export default {
  name: "RmFormInputWeight",
  props:{
    placeHolderText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      rules: [
        (v) => !!v || '重量は必須です',
        (v) => /^[0-9]+$/.test(v) || '半角数字のみ使用可能です'
      ]
    }
  }
}
</script>
<style scoped lang='scss'>
</style>
