<template>
  <div>
    <transition name="fade">
      <span v-if="show" :style="styleObject">{{ tipInfo.text }}</span>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MouseAnimation',
  props: {
    tipInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      show: true
    }
  },
  computed: {
    styleObject () {
      const tipInfo = this.tipInfo
      return {
        left: tipInfo.pageX + 30 + 'px',
        top: tipInfo.pageY + 30 + 'px',
        color: tipInfo.color
      }
    }
  },
  watch: {
    'tipInfo.showId' (val) {
      this.onShow()
    }
  },
  mounted () {
    this.onShow()
  },
  methods: {
    onShow () {
      this.show = true
      this.$nextTick(() => {
        this.show = false
      })
    }
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  position: fixed;
  z-index: 9999;
}
.fade-enter-active, .fade-leave-active {
  transition: all 2.5s;
}
.fade-enter, .fade-leave-to {
  transform: translateY(-350px);
  opacity: 0;
}
</style>
