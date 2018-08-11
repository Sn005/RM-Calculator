import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import RmFormLayout from './Index.vue'
storiesOf(`organisms/RmForm/RmFormLayout`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('RmFormのレイアウト', () => {
    return {
      components: { RmFormLayout },
      template: `
          <rm-form-layout>
            <div slot="left" :style="{ minHeight:'50px', backgroundColor: '#ccc'}">
              left
            </div>
            <div slot="center" :style="{ minHeight:'50px', backgroundColor: '#ccc'}">
              center
            </div>
            <div slot="right" :style="{ minHeight:'50px', backgroundColor: '#ccc'}">
              right
            </div>
          </rm-form-layout>
      `
    }
  })
