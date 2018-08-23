
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import RmResultItem from './Index.vue'

storiesOf('organisms/RmCalculator/partial/RmResultItem', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('RM結果表示component', () => ({
    components: { RmResultItem },
    data () {
      return {
        reps: 10,
        maxWeight: 100
      }
    },
    template: `
    <rm-result-item :reps="reps" :maxWeight="maxWeight" />
    `
  }))
