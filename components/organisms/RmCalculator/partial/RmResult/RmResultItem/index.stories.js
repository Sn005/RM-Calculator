
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import RmResultItem from './RmResultItem.vue'

storiesOf('organisms/RmResult/RmResultItem', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('RM結果表示component', () => ({
    components: { RmResultItem },
    data () {
      return {
        rm: 10,
        maxWeight: 100
      }
    },
    template: `
    <rm-result-item :rm="rm" :maxWeight="maxWeight" />
    `
  }))
