<template lang='pug'>
div
  v-select(
    :items="repsList"
    @change="handleSelect"
    label="repsを選択してください"
    suffix="reps"
    required
  )
</template>
<script>

export default {
  name: 'RmFormSelectReps',
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
      this.$emit('update:reps', Number(val))
    }
  }
}
</script>
