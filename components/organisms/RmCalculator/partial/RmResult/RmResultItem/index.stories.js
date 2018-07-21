
import { storiesOf } from '@storybook/vue'
import RmResultItem from './RmResultItem.vue'

storiesOf('organisms/RmResult/RmResultItem', module)
  .add('RM結果表示component', () => ({
    components: { RmResultItem },
    data () {
      return {
        rm: 10,
        maxWeight: 100
      }
    },
    template: `
    <rm-result-item
      :rm="rm"
      :maxWeight="maxWeight"
    />
    `
  }))
