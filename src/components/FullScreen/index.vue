<template>
  <span @click="handleClick">
    <svg-icon icon-class="fullscreen" class="icon"></svg-icon>
  </span>
</template>

<script>
import screenfull from 'screenfull'

export default {
  filters: {},
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () { },
  methods: {
    async handleClick () {
      // 全屏原生写法
      // if (document.fullscreenElement) {
      //   await document.exitFullscreen()
      // } else {
      //   await document.documentElement.requestFullscreen()
      // }

      if (screenfull.isEnabled) {
        screenfull.toggle()
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.icon {
  color: #fff;
  font-size: 20px;
  margin-right: 10px;
}
</style>
