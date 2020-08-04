<template>
  <div>
    <p v-for="i in 100" :key="i">
      11111111111111111111
    </p>
    <div
      v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
      data-animation-name="runleft"
      class="way-point"
    >
      是我1
    </div>
    <p v-for="i in 100" :key="i">
      11111111111111111111
    </p>
    <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" class="way-point">
      是我2
    </div>
    <p v-for="i in 100" :key="i">
      11111111111111111111
    </p>
    <div v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }" class="way-point">
      是我3
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    intersectionOptions: {
      root: null,
      rootMargin: '0px 0px 0px 0px',
      threshold: [0.25, 0.75] // [0.25, 0.75] if you want a 25% offset!
    }
  }),
  methods: {
    onWaypoint (params) {
      const { going, direction } = params
      // going: in, out
      // direction: top, right, bottom, left
      console.log(params.el.dataset)
      // console.log(params.el.dataset)
      if (going === this.$waypointMap.GOING_IN) {
        console.log('waypoint going in!')
      }
      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log('waypoint going top!')
      }
    }
  }
}
</script>
<style>
.way-point {
  height: 100px;
}
</style>
