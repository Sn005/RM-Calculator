<template lang='pug'>
rm-form-layout
  rm-form-input-weight(
    slot="left"
    v-model="weight"
  )
  app-txt.rm-form__operator(
    slot="center"
    size="xl"
  ) × {{ result}}
  rm-form-select(
    slot="right"
    v-model="reps"
    :repsLength="repsLength"
  )
</template>
<script>
import AppTxt from '@/components/atoms/AppTxt/Default.vue'
import RmFormLayout from './RmFormLayout/Index.vue'
import RmFormSelect from './RmFormSelect/Index.vue'
import RmFormInputWeight from './RmFormInputWeight/Index.vue'
import utils from '@/components/organisms/RmCalculator/utils.js'
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
      if(this.result) this.$emit('change', this.result)
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
