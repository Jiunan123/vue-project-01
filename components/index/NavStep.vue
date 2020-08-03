<template>
  <nav class="navstep">
    <ul :class="{light: activeItem % 2 !== 0}">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="{on: activeItem === index}"
        @click="onClick(index)"
      >
        {{ item.title }}&nbsp;&nbsp;
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeItem: 0
    }
  },
  watch: {
    activeItem (val) {
      this.$store.commit('setActivePage', val)
    }
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
      if ((e.wheelDeltaY < 0 && this.activeItem + 1 >= this.items.length) ||
      (e.wheelDeltaY > 0 && this.activeItem === 0)) {
        return
      }
      e.wheelDeltaY < 0 ? this.activeItem++ : this.activeItem--
      this.scrollTo()
    })
  },
  methods: {
    onClick (index) {
      this.activeItem = index
      this.scrollTo()
    },
    scrollTo () {
      window.scrollTo({
        top: this.activeItem * window.innerHeight,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
$background-color-base: gold;
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
      transition: background 1s;
    }
  }
}
</style>
