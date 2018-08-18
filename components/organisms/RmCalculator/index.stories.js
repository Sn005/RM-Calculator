
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import RmCalculator from './Index.vue'

storiesOf('organisms/RmCalculator', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('RmCalculator', () => ({
    components: { RmCalculator },
    template: `<rm-calculator/>`
  }))
