<template>
  <div>
    <nav v-if="navList.length > 0" class="navstep">
      <ul :class="{light: activeNavId % 2 !== 0}">
        <li
          v-for="item in navList"
          :key="item.id"
          :class="{on: activeNavId === item.id}"
          @click="onClick(item.id)"
        >
          {{ item.title }}&nbsp;&nbsp;
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['activeNavId', 'navList'])
  },
  mounted () {
    this.__lastWheelTimestamp__ = 0
    const deltaTimestamp = 240
    document.addEventListener('wheel', (e) => {
      if (Math.abs(this.__lastWheelTimestamp__ - e.timeStamp) < deltaTimestamp) {
        this.__lastWheelTimestamp__ = e.timeStamp
        return
      }
      this.__lastWheelTimestamp__ = e.timeStamp
      const navId = this.activeNavId
      if ((e.wheelDeltaY < 0 && navId + 1 >= this.navList.length) ||
      (e.wheelDeltaY > 0 && navId === 0)) {
        return
      }
      e.wheelDeltaY < 0 ? this.setActiveNavId(navId + 1) : this.setActiveNavId(navId - 1)
      e.preventDefault()
      this.scrollTo()
    }, { passive: false })
  },
  methods: {
    onClick (id) {
      // todo : 取消直接设置id，统一由waypoint进行汇报。
      // 当跳转菜单的时候，就会触发多次waypoint
      this.setActiveNavId(id)
      this.scrollTo()
    },
    scrollTo () {
      window.scrollTo({
        top: this.activeNavId * window.innerHeight,
        behavior: 'smooth'
      })
    },
    ...mapMutations(['setActiveNavId'])
  }
}
// todo: 设置数据加载出来时，才开始绘制。
</script>
<style lang="scss">
$background-color-base: gold;
@media screen and (max-width: 1599px){
  .navstep {
    display: none;
  }
}
.navstep {
  position: fixed;
  right: 5em;
  bottom: 10em;
  ul {
    border-right: 2px solid $background-color-base;
    padding: 2em 0;
    color: $--color-white;
    font-weight: bold;
    &.light li::after {
      background: $--color-light;
    }
  }
  li {
    position: relative;
    list-style-type: none;
    margin: 2em 0;
    padding: 0 1.5em 0 1em;
    cursor: pointer;
    @mixin active-style {
      color: $--color-black;
      background: $background-color-base;
    }
    @keyframes on {
      to {
        @include active-style;
        transform: rotateX(360deg);
      }
    }
    &.on {
      animation: on 1.5s 1 forwards;
    }
    &:hover {
      @include active-style;
    }
    &::after {
      content: ' ';
      position: absolute;
      background: $--color-dark;
      border: .2em solid $background-color-base;
      outline: 1em solid transparent;
      border-radius: 50%;
      right: -.52em;
      top: .5em;
      height: 1em;
      width: 1em;
      z-index: 1;
      transition: background-color 1s;
    }
  }
}
</style>
