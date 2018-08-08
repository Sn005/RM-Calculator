<template lang='pug'>
div
  v-text-field(
    label="重量を入力してください"
    :rules="rules"
    :value="weight"
    @change="handleInput"
    required
  )
</template>
<script>
export default {
  name: "RmFormInputWeight",
  model: {
    prop: 'weight',
    event: 'change'
  },
  props:{
    weight: {
      type: Number
    }
  },
  data () {
    return {
      rules: [
        (v) => !!v || '重量は必須です',
        (v) => /^[0-9]+$/.test(v) || '半角数字のみ使用可能です'
      ]
    }
  },
  methods: {
    handleInput(val) {
      this.$emit('change', Number(val))
    }
  }
}
</script>
<style scoped lang='scss'>
</style>
