<template lang='pug'>
rm-form-layout
  rm-form-input-weight(
    slot="left"
    :weight.sync="weight"
  )
  app-txt.rm-form__operator(
    slot="center"
    size="xl"
  ) ×
  rm-form-select(
    slot="right"
    :reps.sync="reps"
    :repsLength="repsLength"
  )
</template>
<script>
import AppTxt from '@atoms/AppTxt/Index.vue'
import RmFormLayout from '@organisms/RmCalculator/partial/RmFormLayout/Index.vue'
import RmFormSelect from '@organisms/RmCalculator/partial/RmFormSelect/Index.vue'
import RmFormInputWeight from '@organisms/RmCalculator/partial/RmFormInputWeight/Index.vue'

import utils from '@organisms/RmCalculator/utils.js'
export default {
  name: 'RmForm',
  components: {
    AppTxt,
    RmFormLayout,
    RmFormSelect,
    RmFormInputWeight,
  },
  data() {
    return {
      weight: null,
      reps: null,
    }
  },
  props: {
    maxWeight: {
      type: Number,
    },
    repsLength: {
      type: Number,
      required: true
    }
  },
  computed: {
    result() {
      if(!this.weight || !this.reps) return 0
      const ratio = utils.calcRmRatio(this.reps)
      return utils.formatWeightByPlate(this.weight * ratio)
    }
  },
  watch: {
    result() {
      if(this.result) this.$emit('update:maxWeight', this.result)
    }
  }
}
</script>
<style scoped lang='scss'>
.rm-form{
  &__operator{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: 0;
  }
}
</style>
