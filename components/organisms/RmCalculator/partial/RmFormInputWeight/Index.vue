<template lang='pug'>
div
  v-text-field(
    label="重量を入力してください"
    :rules="rules"
    :value="weight"
    suffix="kg"
    @change="handleInput"
    type="number"
    step="0.1"
    required
  )
</template>
<script>
export default {
  name: "RmFormInputWeight",
  props:{
    weight: {
      type: Number
    }
  },
  data () {
    return {
      rules: [
        (v) => !!v || '重量は必須です',
        (v) => /^([0-9]\d*|0)(\.\d+)?$/.test(v) || '半角数字のみ使用可能です'
      ]
    }
  },
  methods: {
    handleInput(val) {
      this.$emit('update:weight', Number(val))
    }
  }
}
</script>
