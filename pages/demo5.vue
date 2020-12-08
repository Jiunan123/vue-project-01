<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      {{ item }}
    </div>
    <div>computed - {{ styleObject }}</div>
  </div>
</template>

<script>
export default {
  data () {
    // eslint-disable-next-line no-console
    console.log('data.')
    return {
      list: [1, 1, 1],
      obj: {
        t: 1
      }
    }
  },
  computed: {
    styleObject () {
      // eslint-disable-next-line no-console
      console.log('computed.')
      return this.obj.t
    }
  },
  beforeCreate () {
    // eslint-disable-next-line no-console
    console.log('beforeCreate.')
  },
  created () {
    // eslint-disable-next-line no-console
    console.log('created.', 'el: ', this.$el, this.el)
    setTimeout((_) => {
      this.list = [2, 2, 2]
    }, 1000)
  },
  beforeUpdate () {
    // eslint-disable-next-line no-console
    console.log('beforeUpdate')
  },
  updated () {
    // eslint-disable-next-line no-console
    console.log('App.vue finish re-render')
  },
  beforeMount () {
    // eslint-disable-next-line no-console
    console.log('beforeMount', 'this:', this.$el, this.el)
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log('mounted', 'this:', this)
  },
  beforeDestroy () {
    // eslint-disable-next-line no-console
    console.log('beforeDestroy', 'this:', this.$el, this.el)
  }
}
</script>
