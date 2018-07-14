
import { storiesOf } from '@storybook/vue'
import RmResultItem from './RmResultItem.vue'

storiesOf('organisms/RmResult/RmResultItem', module)
  .add('RM結果表示component', () => ({
    components: { RmResultItem },
    data () {
      return {
        rep: 8,
        maxHeight: 100,
        ratio: 0.8
      }
    },
    template: `
    <rm-result-item
      :rep="rep"
      :maxHeight="maxHeight"
      :ratio="ratio"
    />
    `
  }))
