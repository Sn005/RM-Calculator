
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import RmForm from './Index.vue'

storiesOf('organisms/RmForm', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('Rep数選択component', () => ({
    components: { RmForm },
    data () {
      return {
        repsLength: 10
      }
    },
    template: `<rm-form :repsLength="repsLength"/>`
  }))
