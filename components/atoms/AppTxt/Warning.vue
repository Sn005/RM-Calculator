<script>
import Presenter from './Presenter.vue'
export default {
  name: 'WarningTxt',
  extends: Presenter,
  props: {
    ...Presenter.props
  }
}
</script>
<style scoped lang='scss'>
@import "./style.scss";
.state { color: #F44336; }
</style>
