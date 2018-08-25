<template lang="pug">
  v-app(
    id="app"
  )
    app-header
    v-content
      v-container
        v-layout(
          justify-center
        )
          v-flex(
            md8
            xs12
          )
            nuxt
</template>
<script>
  import AppHeader from '@organisms/AppHeader/Index.vue'
  export default {
    name: 'default',
    components: {
      AppHeader
    }
  }
</script>
<style>
html {
  font-family: "Helvetica", "Arial", YuGothic,"Yu Gothic","Hiragino Sans","ヒラギノ角ゴシック","メイリオ", Meiryo,"ＭＳ Ｐゴシック","MS PGothic",sans-serif,;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
