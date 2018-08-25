import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import RmResultLayout from './Index.vue'
storiesOf(`organisms/RmCalculator/partial/RmResultLayout`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('RmResultのレイアウト', () => {
    return {
      components: { RmResultLayout },
      template: `
        <rm-result-layout :items="10"/>
      `
    }
  })
