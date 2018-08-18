<template lang='pug'>
div
  v-select(
    :items="repsList"
    @change="handleSelect"
    label="repを選択してください"
    suffix="回"
    required
  )
</template>
<script>

export default {
  name: 'RmFormSelectReps',
  model: {
    prop: 'reps',
    event: 'change'
  },
  props:{
    reps: {
      type: Number
    },
    repsLength: {
      type: Number,
      required: true
    }
  },
  computed: {
    repsList() {
      return [...Array(this.repsLength).keys()].map(i =>i + 1)
    }
  },
  methods: {
    handleSelect(val) {
      this.$emit('change', Number(val))
    }
  }
}
</script>
