
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import RmFormSelectReps from './RmFormSelectReps.vue'

storiesOf('organisms/RmForm/RmFormSelectReps', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Rep数選択component', () => ({
    components: { RmFormSelectReps },
    data () {
      return {
        repsLength: 10
      }
    },
    template: `<rm-form-select-reps :repsLength="repsLength"/>`
  }))
