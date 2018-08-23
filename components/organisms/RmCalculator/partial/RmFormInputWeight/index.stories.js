
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import RmFormInputWeight from './Index.vue'

storiesOf('organisms/RmCalculator/partial/RmFormInputWeight', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('重量入力コンポーネント', () => {
    return {
      components: { RmFormInputWeight },
      data () {
        return {
          weight: 100
        }
      },
      template: `<rm-form-input-weight v-model="weight"/>`,
      // methods: {
      //   change: action('入力されました')
      // }
    }
  })
