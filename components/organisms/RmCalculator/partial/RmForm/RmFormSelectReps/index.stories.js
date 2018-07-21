
import { storiesOf } from '@storybook/vue'
import RmFormSelectReps from './RmFormSelectReps.vue'

storiesOf('organisms/RmForm/RmFormSelectReps', module)
  .add('Rep数選択component', () => ({
    components: { RmFormSelectReps },
    data () {
      return {
        repsLength: 10
      }
    },
    template: `
    <rm-form-select-reps
      :repsLength="repsLength"
    />
    `
  }))
