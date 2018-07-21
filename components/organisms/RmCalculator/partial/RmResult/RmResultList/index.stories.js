
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'

import RmResultList from './RmResultList.vue'

storiesOf('organisms/RmResult/RmResultList', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('RM結果一覧', () => {
    return {
      components: { RmResultList },
      data () {
        return {
          repsLength: 10,
          maxWeight: 100,
        }
      },
      template: `
      <rm-result-list :maxWeight="maxWeight" :repsLength="repsLength" />
      `
    }
  })
