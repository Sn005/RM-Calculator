<template lang='pug'>
div
  v-select(
    :items="reps"
    label="repを選択してください"
  )
</template>
<script>

export default {
  name: 'RmFormSelectReps',
  props: {
    repsLength: {
      type: Number,
      required: true
    }
  },
  computed: {
    reps() {
      return [...Array(this.repsLength).keys()].map(i => `${++i}回`)
    }
  }
 }
</script>
