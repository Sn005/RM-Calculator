
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'

import RmResult from './Index.vue'

storiesOf('organisms/RmCalculator/partial/RmResult', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('RM結果一覧', () => {
    return {
      components: { RmResult },
      data () {
        return {
          repsLength: 10,
          maxWeight: 100,
        }
      },
      template: `
      <rm-result :maxWeight="maxWeight" :repsLength="repsLength" />
      `
    }
  })
