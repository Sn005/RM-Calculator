
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'

import RmResultLayout from './RmResultLayout.vue'

storiesOf('organisms/RmResult/RmResultLayout', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('RM結果表示レイアウトcomponent', () => ({
    components: { RmResultLayout },
    data () {
      return {
        rmListLength: 10
      }
    },
    template: `
    <rm-result-layout :items="rmListLength">
      <p slot="item" slot-scope="{ i }">{{ i + 1 }}番目</p>
    </rm-result-layout>
    `
  }))
