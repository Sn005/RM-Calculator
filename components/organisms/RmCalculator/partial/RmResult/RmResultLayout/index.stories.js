
import { storiesOf } from '@storybook/vue'
import RmResultLayout from './RmResultLayout.vue'

storiesOf('organisms/RmResult/RmResultLayout', module)
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
