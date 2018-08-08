
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import RmFormSelect from './Index.vue'

storiesOf('organisms/RmForm/RmFormSelect', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Rep数選択component', () => ({
    components: { RmFormSelect },
    data () {
      return {
        repsLength: 10
      }
    },
    template: `<rm-form-select :repsLength="repsLength"/>`
  }))
