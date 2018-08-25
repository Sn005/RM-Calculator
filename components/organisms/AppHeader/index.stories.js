
import { storiesOf } from '@storybook/vue'
import AppHeader from './Index.vue'

storiesOf('organisms/AppHeader', module)
  .add('アプリケーションヘッダー', () => ({
    components: { AppHeader },
    template: '<app-header />'
  }))
