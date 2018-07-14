
import { storiesOf } from '@storybook/vue'
import RmResultList from './RmResultList.vue'

storiesOf('organisms/RmResult/RmResultList', module)
  .add('RM結果一覧component', () => ({
    components: { RmResultList },
    data () {
      return {
        rmList: [...Array(10)].map((v,i)=>i +1),
        maxWeight: 100
      }
    },
    template: `
    <rm-result-list
      :maxWeight="maxWeight"
      :rmList="rmList"
    />
    `
  }))
