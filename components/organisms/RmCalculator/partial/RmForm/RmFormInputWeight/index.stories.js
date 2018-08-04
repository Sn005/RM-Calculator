
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'
import RmFormInputWeight from './Index.vue'

storiesOf('organisms/RmForm/RmFormInputWeight', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('重量入力コンポーネント', () => ({
    components: { RmFormInputWeight },
    data () {
      return {
        placeHolderText: "重量を入力してください"
      }
    },
    template: `<rm-form-input-weight placeHolderText="重量を入力してください"/>`
  }))
