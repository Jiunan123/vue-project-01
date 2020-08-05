<template>
  <div
    v-waypoint="waypoint"
    :class="animation"
  >
    <slot />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    report: {
      type: String,
      default: ''
    },
    animation: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 1
    },
    delay: {
      type: Number,
      default: 0
    },
    wsOptions: {
      type: Object,
      default: () => ({
        root: null,
        rootMargin: '0px',
        threshold: [0.25, 0.75]
      })
    }
  },
  data () {
    return {
      played: false,
      active: true
    }
  },
  computed: {
    waypoint () {
      return {
        active: true,
        callback: this.onWaypoint,
        intersectionOptions: this.wpOptions
      }
    }
  },
  methods: {
    onWaypoint ({ el, going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        if (!this.played && this.animation) {
          el.style.animation = `${this.animation} ${this.duration}s ${this.delay}s forwards`
          this.played = true
          if (!this.report) {
            this.active = false
          }
        }
        if (this.report) {
          this.setActiveNav(this.report)
        }
      }
    },
    ...mapMutations(['setActiveNav'])
  }
}
</script>
