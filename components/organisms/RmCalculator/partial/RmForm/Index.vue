<template lang='pug'>
rm-form-layout
  rm-form-input-weight(
    slot="left"
    v-model="weight"
  )
  app-txt.rm-form__operator(
    slot="center"
    size="xl"
  ) ×
  rm-form-select(
    slot="right"
    :repsLength="repsLength"
  )
</template>
<script>
import AppTxt from '@/components/atoms/AppTxt/Default.vue'
import RmFormLayout from './RmFormLayout/Index.vue'
import RmFormSelect from './RmFormSelect/Index.vue'
import RmFormInputWeight from './RmFormInputWeight/Index.vue'
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
      weight: null
    }
  },
  props: {
    repsLength: {
      type: Number,
      required: true
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
