<template>
  <section ref="mainBox" class="main" :class="{hover: hover}">
    <div v-if="show" class="text">
      <h1>
        <span v-time />, I'm Jiunan.Lee
      </h1>
      <q>Life is like a box of chocolates, you never konw what you're going to get.</q>
      <p class="author-name">
        我叫玖南酱
      </p>
      <p class="author-info">
        一名前端开发工程师
      </p>
      <p class="author-info">
        835899489@qq.com
      </p>
    </div>
  </section>
</template>

<script>
import VTime, { Time } from '@/directives/time.js'

export default {
  directives: {
    time: VTime(Time.getHelloFormatTime)
  },
  data () {
    return {
      hover: false,
      show: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.show = true
    })
    this.$refs.mainBox.addEventListener('mousemove', this.onMouseMove)
    this.$refs.mainBox.addEventListener('mouseout', this.onMouseOut)
    document.body.addEventListener('mouseout', this.onMouseOut)
    document.body.addEventListener('mouseenter', this.onMouseEnter)
  },
  methods: {
    onMouseEnter (e) {
      if (!this.$refs.mainBox) { return }
      this.hover = true
      this.setBoxShadow(0, 0)
      this.mainBoxSetAnimation([{ transform: 'scale(1.03)' }])
    },
    onMouseOut (e) {
      if (!this.$refs.mainBox) { return }
      this.hover = false
      this.$refs.mainBox.style.boxShadow = 'none'
      this.mainBoxSetAnimation([
        { transform: 'scale(1) translate(0, 0) rotateX(0) rotateY(0)' }
      ])
    },
    onMouseMove (e) {
      if (!this.$refs.mainBox) { return }
      this.hover = true
      const $mainBox = this.$refs.mainBox
      const { sign: hSign, origin: originX, shadow: shadowX } = this.calcSign(
        e.pageX - $mainBox.offsetLeft,
        $mainBox.clientWidth
      )
      const { sign: vSign, origin: originY, shadow: shadowY } = this.calcSign(
        e.pageY - $mainBox.offsetTop,
        $mainBox.clientHeight
      )
      $mainBox.style.transformOrigin = `${originX}% ${originY}% 50%`
      this.setBoxShadow(shadowX, shadowY)
      this.mainBoxSetAnimation([
        {
          transform: `scale(1.03) translate(${hSign * 20}px, ${
            vSign * 20
          }px) rotateX(${hSign * 10}deg) rotateY(${vSign * 10}deg)`
        }
      ])
      e.preventDefault()
    },
    calcSign (rel, client) {
      const delta = 50
      let sign = -1
      const origin = (rel / client) * 100
      const shadow = -((rel / client) * 2 - 1)
      if (Math.abs(rel - client / 2) <= delta) {
        sign = 0
      } else if (rel > client / 2) {
        sign = 1
      }
      return { sign, origin, shadow }
    },
    mainBoxSetAnimation (frames) {
      this.$refs.mainBox.animate(frames, {
        duration: 2000,
        fill: 'forwards',
        easing: 'ease'
      })
    },
    setBoxShadow (shadowX, shadowY) {
      this.$refs.mainBox.style.boxShadow = `rgba(255,255,255,.4) ${shadowX}em ${shadowY}em .5em .5em`
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../../assets/css/_font.scss';
section.main {
  &::before {
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 2em;
    opacity: 0;
  }
  &.hover::before {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid $--color-white;
    opacity: 1;
  }
  &.hover {
    border-radius: 2em;
  }
  position: relative;
  z-index: 0;
  cursor: move;
  color: $--color-white;
  line-height: 2;
  padding: 2em;
  text-align: center;
  width: fit-content;
  h1 {
    font-family: $--font-family-custom;
    font-size: $--font-size-xxxl;
  }
  q {
    font-family: $--font-family-monospace;
    font-size: $--font-size-sm;
  }
  .author-name,
  .author-info {
    font-family: $--font-famliy-custom-zh;
  }
  .author-name {
    font-size: $--font-size-xxl;
  }
  .author-info {
    font-size: $--font-size-lg;
  }
}
</style>
